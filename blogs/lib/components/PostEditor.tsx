"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { nanoid } from "nanoid";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// ------------------
// Types
// ------------------

type ParagraphType = "paragraph" | "special_paragraph" | "sectionTitle";

export type PostBlock =
  | { type: ParagraphType; text: string; uid: string }
  | { type: "image"; src: string; alt: string; uid: string };

interface Post {
  title: string;
  sub_title?: string;
  category_id: string;
  cover_image?: { src: string; alt: string };
  content: PostBlock[];
}

// ------------------
// Helpers
// ------------------

const createEmptyBlock = (type: PostBlock["type"]): PostBlock => {
  return type === "image"
    ? { type: "image", src: "", alt: "", uid: nanoid() }
    : { type, text: "", uid: nanoid() };
};

interface SortableProps {
  id: string;
  index: number;
  block: PostBlock;
  children: React.ReactNode;
}

const SortableBlock = ({ id, index, block, children }: SortableProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} className="p-4">
      <div className="flex justify-between mb-3">
        <span className="font-semibold">
          בלוק {index + 1} — {block.type}
        </span>

        {/* Drag handle */}
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing px-2 text-xl"
        >
          ☰
        </button>
      </div>

      {children}
    </Card>
  );
};

// ------------------
// Component
// ------------------

const categories = [
  { id: "cat1", name: "טכנולוגיה" },
  { id: "cat2", name: "בריאות" },
  { id: "cat3", name: "חינוך" },
];

const PostEditorNew = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    sub_title: "",
    category_id: "",
    cover_image: { src: "", alt: "" },
    content: [],
  });

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const updateField = <K extends keyof Post>(key: K, value: Post[K]) => {
    setPost((prev) => ({ ...prev, [key]: value }));
  };

  const updateBlock = <K extends keyof PostBlock>(
    index: number,
    key: K,
    value: PostBlock[K]
  ) => {
    const content = [...post.content];
    content[index] = { ...content[index], [key]: value };
    updateField("content", content);
  };

  const addBlock = (index: number, type: PostBlock["type"]) => {
    const content = [...post.content];
    content.splice(index, 0, createEmptyBlock(type));
    updateField("content", content);
  };

  const removeBlock = (index: number) => {
    const content = [...post.content];
    content.splice(index, 1);
    updateField("content", content);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = post.content.findIndex((b) => b.uid === active.id);
    const newIndex = post.content.findIndex((b) => b.uid === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const reordered = arrayMove(post.content, oldIndex, newIndex);
    setPost((prev) => ({ ...prev, content: reordered }));
  };

  const handleSave = () => {
    console.log("Post created:", post);
    alert("Post saved! Check console.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* ---------- General Post Fields ---------- */}
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">יצירת פוסט חדש</h2>

          <Input
            placeholder="כותרת"
            value={post.title}
            onChange={(e) => updateField("title", e.target.value)}
          />

          <Input
            placeholder="תת כותרת"
            value={post.sub_title ?? ""}
            onChange={(e) => updateField("sub_title", e.target.value)}
          />

          {/* Categories */}
          <Select
            value={post.category_id}
            onValueChange={(v) => updateField("category_id", v)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="בחר קטגוריה" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Cover Image */}
          <Input
            placeholder="כתובת תמונת קאבר"
            value={post.cover_image?.src ?? ""}
            onChange={(e) =>
              updateField("cover_image", {
                ...post.cover_image!,
                src: e.target.value,
              })
            }
          />

          <Input
            placeholder="Alt לתמונה"
            value={post.cover_image?.alt ?? ""}
            onChange={(e) =>
              updateField("cover_image", {
                ...post.cover_image!,
                alt: e.target.value,
              })
            }
          />
        </CardContent>
      </Card>

      {/* ---------- Content Blocks (Drag & Drop) ---------- */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={post.content.map((b) => b.uid)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-6">
            {post.content.map((block, i) => (
              <SortableBlock
                key={block.uid}
                id={block.uid}
                index={i}
                block={block}
              >
                {block.type === "image" ? (
                  <div className="space-y-2">
                    <Input
                      placeholder="כתובת תמונה"
                      value={block.src}
                      onChange={(e) => updateBlock(i, "src", e.target.value)}
                    />
                    <Input
                      placeholder="Alt"
                      value={block.alt}
                      onChange={(e) => updateBlock(i, "alt", e.target.value)}
                    />
                  </div>
                ) : (
                  <Textarea
                    className="min-h-[120px]"
                    placeholder={
                      block.type === "sectionTitle" ? "כותרת" : "פסקה..."
                    }
                    value={block.text}
                    onChange={(e) => updateBlock(i, "text", e.target.value)}
                  />
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "paragraph",
                    "special_paragraph",
                    "sectionTitle",
                    "image",
                  ].map((t) => (
                    <Button
                      key={t}
                      variant="outline"
                      size="sm"
                      onClick={() => addBlock(i + 1, t as PostBlock["type"])}
                    >
                      הוסף {t}
                    </Button>
                  ))}
                </div>

                <Button
                  className="mt-4"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeBlock(i)}
                >
                  מחק
                </Button>
              </SortableBlock>
            ))}

            {/* אם אין בלוקים */}
            {post.content.length === 0 && (
              <div className="flex gap-2">
                {[
                  "paragraph",
                  "special_paragraph",
                  "sectionTitle",
                  "image",
                ].map((t) => (
                  <Button
                    key={t}
                    variant="outline"
                    onClick={() => addBlock(0, t as PostBlock["type"])}
                  >
                    הוסף {t}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>

      <Button size="lg" className="w-full" onClick={handleSave}>
        שמור
      </Button>
    </div>
  );
};

export default PostEditorNew;
