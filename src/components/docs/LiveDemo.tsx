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
  background: "#0b0f16",
  color: "#e4e7ec",
  "--color-grey-50": "#101928",
  "--color-grey-75": "#1d2739",
  "--color-grey-100": "#344054",
  "--color-grey-200": "#475367",
  "--color-grey-300": "#667185",
  "--color-grey-400": "#98a2b3",
  "--color-grey-500": "#d0d5dd",
  "--color-grey-600": "#e4e7ec",
  "--color-grey-700": "#f0f2f5",
  "--color-grey-800": "#f7f9fc",
  "--color-grey-900": "#ffffff",
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
  return (
    <LiveProvider code={code} scope={scope} noInline={false}>
      <div className="rounded-xl border border-white/4">
        <div
          className="rounded-t-xl border-b border-white/10 p-8 min-h-[80px]"
          style={previewStyle}
        >
          <LivePreview />
        </div>

        {/* Editor */}
        <div className="bg-[#080808]">
          <div className="flex items-center border-b border-white/3 px-4 py-2">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
              Edit code
            </span>
          </div>
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

        <LiveError className="border-t border-red-500/10 bg-red-500/3 px-4 py-2 text-[12px] text-red-400" />
      </div>
    </LiveProvider>
  );
}
