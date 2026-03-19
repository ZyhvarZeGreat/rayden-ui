"use client";

import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Input,
  Select,
  SelectOption,
  Badge,
  Tabs,
  Tab,
  Toggle,
  Checkbox,
  Radio,
  Chip,
  ProgressBar,
  ProgressCircle,
  Avatar,
  AvatarGroup,
  Alert,
  Divider,
  Breadcrumb,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  MetricsCard,
  EmptyStateIllustration,
  FileUpload,
  FileUploadDropZone,
  FileUploadItem,
  Pagination,
  SidebarMenu,
  SidebarMenuSection,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  ActivityItem,
  ActivityContent,
  Tooltip,
  Icon,
} from "@raydenui/ui";

const scope = {
  useState,
  Button,
  ButtonGroup,
  ButtonGroupItem,
  Input,
  Select,
  SelectOption,
  Badge,
  Tabs,
  Tab,
  Toggle,
  Checkbox,
  Radio,
  Chip,
  ProgressBar,
  ProgressCircle,
  Avatar,
  AvatarGroup,
  Alert,
  Divider,
  Breadcrumb,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  MetricsCard,
  EmptyStateIllustration,
  FileUpload,
  FileUploadDropZone,
  FileUploadItem,
  Pagination,
  SidebarMenu,
  SidebarMenuSection,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  ActivityItem,
  ActivityContent,
  Tooltip,
  Icon,
};

interface LiveDemoProps {
  code: string;
}

const previewStyle: React.CSSProperties = {
  background: "#090d15",
  color: "#f9fafb",
  "--color-grey-50": "#f9fafb",
  "--color-grey-75": "#f3f4f6",
  "--color-grey-100": "#e5e7eb",
  "--color-grey-200": "#d1d5db",
  "--color-grey-300": "#9ca3af",
  "--color-grey-400": "#6b7280",
  "--color-grey-500": "#4b5563",
  /* Keep text-like greys readable on dark preview background */
  "--color-grey-600": "#cbd5e1",
  /* Demo text often uses text-grey-700/800; these must be light on dark previews. */
  "--color-grey-700": "#cbd5e1",
  "--color-grey-800": "#e5e7eb",
  "--color-grey-900": "#f9fafb",
  "--color-primary-50": "#ffece5",
  "--color-primary-100": "#fcb59a",
  "--color-primary-200": "#fa9874",
  "--color-primary-300": "#f77a4a",
  "--color-primary-400": "#f56630",
  "--color-primary-500": "#eb5017",
  "--color-primary-600": "#cc400c",
  "--color-primary-700": "#ad3307",
  "--color-success-50": "#e7f6ec",
  "--color-success-200": "#5fc381",
  "--color-success-400": "#0f973d",
  "--color-success-500": "#099137",
  "--color-success-600": "#04802e",
  "--color-error-50": "#fbeae9",
  "--color-error-200": "#e26e6a",
  "--color-error-400": "#d42620",
  "--color-error-500": "#cb1a14",
  "--color-warning-50": "#fef6e7",
  "--color-warning-400": "#f3a218",
  "--color-warning-500": "#dd900d",
  "--color-info-400": "#0ba5ec",
  "--color-info-500": "#0086c9",
} as React.CSSProperties;

export default function LiveDemo({ code }: LiveDemoProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <LiveProvider code={code} scope={scope} noInline={false}>
      <div className="rounded-xl border border-white/4 overflow-hidden">
        <div className="border-b border-white/10 bg-dark-card">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} variant="pill">
            <Tab value="preview">Live preview</Tab>
            <Tab value="code">Code</Tab>
          </Tabs>
        </div>

        {/* Preview */}
        {activeTab === "preview" && (
          <div
            className="rounded-t-xl border-b border-white/10 p-6 sm:p-8 min-h-[80px]"
            style={previewStyle}
          >
            <LivePreview />
          </div>
        )}

        {/* Editor */}
        {activeTab === "code" && (
          <div className="bg-[#080808]">
            <div className="flex items-center border-b border-white/3 px-4 py-2">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
                Edit code
              </span>
            </div>

            {/* Keep editor from taking over the page on mobile */}
            <div className="max-h-[360px] overflow-auto">
              <div className="[&_.prism-code]:bg-transparent! [&_.prism-code]:text-[13px]! [&_textarea]:outline-none!">
                <LiveEditor
                  style={{
                    fontFamily: "var(--font-display), monospace",
                    fontSize: "13px",
                    padding: "16px",
                    background: "transparent",
                    lineHeight: "1.6",
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <LiveError className="border-t border-red-500/10 bg-red-500/3 px-4 py-2 text-[12px] text-red-400" />
      </div>
    </LiveProvider>
  );
}
