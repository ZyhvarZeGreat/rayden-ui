export interface ComponentMeta {
  slug: string;
  name: string;
  description: string;
  category: "forms" | "navigation" | "data-display" | "feedback" | "layout" | "overlay";
  code: string;
  props: { name: string; type: string; default?: string; description: string }[];
}

export const componentRegistry: ComponentMeta[] = [
  // ── Forms & Inputs ──
  {
    slug: "button",
    name: "Button",
    description: "8 variants, 2 appearances (solid/outlined), 2 sizes.",
    category: "forms",
    code: `<div className="flex flex-wrap gap-3">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="grey" appearance="outlined">Outline</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="success" size="sm">Success</Button>
  <Button variant="warning" size="sm">Warning</Button>
  <Button variant="info" size="sm">Info</Button>
  <Button variant="text">Text</Button>
</div>`,
    props: [
      { name: "variant", type: '"primary" | "secondary" | "grey" | "destructive" | "text" | "success" | "warning" | "info"', default: '"primary"', description: "Visual variant" },
      { name: "appearance", type: '"solid" | "outlined"', default: '"solid"', description: "Fill or outline" },
      { name: "size", type: '"sm" | "lg"', default: '"lg"', description: "Size" },
      { name: "icon", type: "ReactNode | IconName", description: "Optional icon" },
      { name: "iconPosition", type: '"none" | "leading" | "trailing" | "icon-only"', default: '"none"', description: "Icon placement" },
    ],
  },
  {
    slug: "button-group",
    name: "ButtonGroup",
    description: "Group buttons into a connected strip with active state.",
    category: "forms",
    code: `<ButtonGroup>
  <ButtonGroupItem active>Day</ButtonGroupItem>
  <ButtonGroupItem>Week</ButtonGroupItem>
  <ButtonGroupItem>Month</ButtonGroupItem>
</ButtonGroup>`,
    props: [
      { name: "children", type: "ReactNode", description: "ButtonGroupItem children" },
    ],
  },
  {
    slug: "input",
    name: "Input",
    description: "Text input with labels, validation, icons, and addons.",
    category: "forms",
    code: `<div className="flex flex-col gap-4 max-w-sm">
  <Input label="Email" placeholder="name@example.com" />
  <Input label="Password" type="password" helperText="Min 8 characters" />
  <Input label="Error" error="This field is required" />
  <Input label="Success" success="Looks good!" />
</div>`,
    props: [
      { name: "size", type: '"sm" | "lg"', default: '"lg"', description: "Size" },
      { name: "label", type: "string", description: "Label text" },
      { name: "helperText", type: "string", description: "Helper text" },
      { name: "error", type: "string | boolean", description: "Error state" },
      { name: "success", type: "string | boolean", description: "Success state" },
      { name: "leadingIcon", type: "ReactNode | IconName", description: "Left icon" },
      { name: "trailingIcon", type: "ReactNode | IconName", description: "Right icon" },
      { name: "addonRight", type: "string", description: "Right text addon" },
    ],
  },
  {
    slug: "select",
    name: "Select",
    description: "Dropdown select with search, icons, avatars, and status dots.",
    category: "forms",
    code: `<div className="max-w-sm">
  <Select label="Framework" placeholder="Choose one" defaultValue="react">
    <SelectOption value="react">React</SelectOption>
    <SelectOption value="next">Next.js</SelectOption>
    <SelectOption value="vue">Vue</SelectOption>
    <SelectOption value="svelte">Svelte</SelectOption>
  </Select>
</div>`,
    props: [
      { name: "value", type: "string", description: "Controlled value" },
      { name: "defaultValue", type: "string", description: "Default value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
      { name: "placeholder", type: "string", description: "Placeholder" },
      { name: "label", type: "string", description: "Label text" },
      { name: "disabled", type: "boolean", description: "Disabled state" },
    ],
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Checkbox with label and optional description.",
    category: "forms",
    code: `<div className="flex flex-col gap-4">
  <Checkbox label="Accept terms and conditions" />
  <Checkbox label="Subscribe to newsletter" defaultChecked />
  <Checkbox label="Remember me" description="Keep me signed in" />
</div>`,
    props: [
      { name: "label", type: "string", description: "Label" },
      { name: "description", type: "string", description: "Description" },
      { name: "position", type: '"left" | "right"', default: '"left"', description: "Label side" },
    ],
  },
  {
    slug: "radio",
    name: "Radio",
    description: "Radio button with label and description.",
    category: "forms",
    code: `<div className="flex flex-col gap-4">
  <Radio label="Basic plan" name="plan" defaultChecked />
  <Radio label="Pro plan" name="plan" />
  <Radio label="Enterprise" name="plan" description="Custom pricing" />
</div>`,
    props: [
      { name: "label", type: "string", description: "Label" },
      { name: "description", type: "string", description: "Description" },
      { name: "position", type: '"left" | "right"', default: '"left"', description: "Label side" },
    ],
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "Switch control for on/off states.",
    category: "forms",
    code: `<div className="flex flex-col gap-4">
  <Toggle label="Enable dark mode" defaultChecked />
  <Toggle label="Send notifications" />
  <Toggle label="Auto-save" description="Save automatically" />
</div>`,
    props: [
      { name: "label", type: "string", description: "Label" },
      { name: "description", type: "string", description: "Description" },
    ],
  },
  {
    slug: "chip",
    name: "Chip",
    description: "Compact selection chip with close and dropdown actions.",
    category: "forms",
    code: `<div className="flex flex-wrap gap-2">
  <Chip>React</Chip>
  <Chip>TypeScript</Chip>
  <Chip>Tailwind</Chip>
  <Chip variant="filter">Filter</Chip>
</div>`,
    props: [
      { name: "variant", type: '"input" | "filter"', default: '"input"', description: "Variant" },
      { name: "icon", type: "ReactNode | IconName", description: "Leading icon" },
      { name: "onClose", type: "() => void", description: "Close handler" },
      { name: "onDropdown", type: "() => void", description: "Dropdown handler" },
    ],
  },
  {
    slug: "file-upload",
    name: "FileUpload",
    description: "File upload with drag-and-drop zone and file list.",
    category: "forms",
    code: `() => {
  const [files, setFiles] = useState([]);

  return (
    <FileUpload
      files={files}
      onFilesChange={(next) => setFiles(Array.isArray(next) ? next : [])}
      accept="image/*,.pdf"
      multiple
      maxSize={5242880}
    >
      <FileUploadDropZone />
      {files.map((file, index) => (
        <FileUploadItem key={file.id ?? file.name ?? index} file={file} />
      ))}
    </FileUpload>
  );
}`,
    props: [
      { name: "files", type: "FileUploadFileData[]", description: "Controlled files" },
      { name: "onFilesChange", type: "(files) => void", description: "File change handler" },
      { name: "multiple", type: "boolean", description: "Allow multiple" },
      { name: "accept", type: "string", description: "MIME types" },
      { name: "maxSize", type: "number", description: "Max file size (bytes)" },
    ],
  },

  // ── Navigation ──
  {
    slug: "tabs",
    name: "Tabs",
    description: "Tabbed navigation with line and pill variants.",
    category: "navigation",
    code: `<div className="flex flex-col gap-6">
  <Tabs defaultValue="preview">
    <Tab value="preview">Preview</Tab>
    <Tab value="code">Code</Tab>
    <Tab value="props">Props</Tab>
  </Tabs>
  <Tabs variant="pill" defaultValue="react">
    <Tab value="react">React</Tab>
    <Tab value="next">Next.js</Tab>
    <Tab value="vite">Vite</Tab>
  </Tabs>
</div>`,
    props: [
      { name: "variant", type: '"line" | "pill"', default: '"line"', description: "Style" },
      { name: "value", type: "string", description: "Controlled value" },
      { name: "defaultValue", type: "string", description: "Default value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    ],
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Breadcrumb navigation with separators and icons.",
    category: "navigation",
    code: `<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb", active: true },
]} />`,
    props: [
      { name: "items", type: "BreadcrumbItem[]", description: "Navigation items" },
      { name: "separator", type: "ReactNode", description: "Custom separator" },
    ],
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "Page navigation with prev/next and numbered pages.",
    category: "navigation",
    code: `<Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />`,
    props: [
      { name: "currentPage", type: "number", description: "Current page" },
      { name: "totalPages", type: "number", description: "Total pages" },
      { name: "onPageChange", type: "(page: number) => void", description: "Page change" },
      { name: "showPrevNext", type: "boolean", default: "true", description: "Show prev/next" },
    ],
  },
  {
    slug: "sidebar-menu",
    name: "SidebarMenu",
    description: "Collapsible sidebar with sections, items, sub-items, and 4 themes.",
    category: "navigation",
    code: `<SidebarMenu value="dashboard" theme="dark-grey">
  <SidebarMenuSection title="Main">
    <SidebarMenuItem value="dashboard" label="Dashboard" />
    <SidebarMenuItem value="analytics" label="Analytics" />
    <SidebarMenuItem value="settings" label="Settings">
      <SidebarMenuSub>
        <SidebarMenuSubItem value="general" label="General" />
        <SidebarMenuSubItem value="team" label="Team" />
      </SidebarMenuSub>
    </SidebarMenuItem>
  </SidebarMenuSection>
</SidebarMenu>`,
    props: [
      { name: "value", type: "string", description: "Active item" },
      { name: "collapsed", type: "boolean", description: "Collapsed mode" },
      { name: "theme", type: '"light" | "blue" | "dark-blue" | "dark-grey"', default: '"light"', description: "Color theme" },
    ],
  },
  {
    slug: "dropdown-menu",
    name: "DropdownMenu",
    description: "Dropdown menu with groups, labels, icons, shortcuts, and separators.",
    category: "navigation",
    code: `<DropdownMenu>
  <DropdownMenuTrigger>
    <Button variant="grey" appearance="outlined">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuGroup>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    props: [
      { name: "open", type: "boolean", description: "Controlled open" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change" },
    ],
  },

  // ── Data Display ──
  {
    slug: "badge",
    name: "Badge",
    description: "Compact label for status, tags, and categories.",
    category: "data-display",
    code: `<div className="flex flex-wrap gap-2">
  <Badge color="orange">Orange</Badge>
  <Badge color="blue" type="accent">Accent</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="error" type="outline">Error</Badge>
  <Badge color="warning" size="sm">Warning</Badge>
  <Badge color="neutral">Neutral</Badge>
  <Badge color="disabled">Disabled</Badge>
</div>`,
    props: [
      { name: "color", type: '"orange" | "blue" | "success" | "warning" | "error" | "neutral" | "disabled"', default: '"neutral"', description: "Color" },
      { name: "type", type: '"filled" | "accent" | "outline"', default: '"filled"', description: "Type" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size" },
    ],
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "User avatar with image, initials, icon, and status indicator.",
    category: "data-display",
    code: `<div className="flex items-center gap-3">
  <Avatar type="image" src="https://i.pravatar.cc/150?img=1" size="xl" status="online" />
  <Avatar type="image" src="https://i.pravatar.cc/150?img=5" size="lg" />
  <Avatar type="image" src="https://i.pravatar.cc/150?img=12" size="md" status="verified" />
  <Avatar type="initials" initials="NS" size="sm" />
  <Avatar type="icon" size="xs" />
</div>`,
    props: [
      { name: "type", type: '"image" | "icon" | "initials"', default: '"image"', description: "Avatar type" },
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: "Size" },
      { name: "status", type: '"none" | "online" | "offline" | "verified"', default: '"none"', description: "Status dot" },
      { name: "initials", type: "string", description: "Initials text" },
    ],
  },
  {
    slug: "table",
    name: "Table",
    description: "Data table with sortable headers, row selection, and styled cells.",
    category: "data-display",
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>Active</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Bob</TableCell>
      <TableCell>Inactive</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    props: [
      { name: "sortable", type: "boolean (TableHead)", description: "Enable sort on column" },
      { name: "sortDirection", type: '"asc" | "desc" | null', description: "Sort direction" },
      { name: "selected", type: "boolean (TableRow)", description: "Row selected state" },
    ],
  },
  {
    slug: "metrics-card",
    name: "MetricsCard",
    description: "Dashboard metric card with 6 layout variations, trends, and CTAs.",
    category: "data-display",
    code: `<div className="grid gap-4 max-w-md">
  <MetricsCard variation="2" label="Total Revenue" value="$45,823" trendBadge={{ label: "12%", trend: "up" }} description="vs last month" />
  <MetricsCard variation="1" label="Active Users" value="1,284" statusBadge={{ label: "Live", variant: "success" }} />
</div>`,
    props: [
      { name: "variation", type: '"1" | "2" | "3" | "4" | "5" | "6"', default: '"1"', description: "Layout variation" },
      { name: "label", type: "string", description: "Metric label" },
      { name: "value", type: "string | number", description: "Metric value" },
      { name: "trendBadge", type: "{ label, trend }", description: "Trend indicator" },
      { name: "statusBadge", type: "{ label, variant }", description: "Status badge" },
    ],
  },
  {
    slug: "activity-feed",
    name: "ActivityItem",
    description: "Timeline activity items with avatars, connectors, and content blocks.",
    category: "data-display",
    code: `<div className="flex flex-col">
  <ActivityItem
    connector="top"
    avatar={<Avatar type="image" src="https://i.pravatar.cc/150?img=3" size="sm" />}
    text={<span className="text-grey-800">Alex deployed <strong>v2.1.0</strong> to production</span>}
    timestamp="2 hours ago"
  />
  <ActivityItem
    connector="middle"
    avatar={<Avatar type="image" src="https://i.pravatar.cc/150?img=9" size="sm" />}
    text={<span className="text-grey-800">Sarah merged pull request <strong>#482</strong></span>}
    timestamp="5 hours ago"
  />
  <ActivityItem
    connector="last"
    avatar={<Avatar type="image" src="https://i.pravatar.cc/150?img=15" size="sm" />}
    text={<span className="text-grey-800">Chris opened issue <strong>#91</strong></span>}
    timestamp="1 day ago"
  />
</div>`,
    props: [
      { name: "avatar", type: "ReactNode", description: "Avatar element" },
      { name: "text", type: "ReactNode", description: "Activity text" },
      { name: "unread", type: "boolean", description: "Unread indicator" },
      { name: "connector", type: '"top" | "middle" | "last"', description: "Timeline connector" },
    ],
  },
  {
    slug: "empty-state",
    name: "EmptyStateIllustration",
    description: "19 themed illustrations for empty states (colored + monochrome).",
    category: "data-display",
    code: `<div className="flex gap-6 items-end">
  <EmptyStateIllustration name="inbox" size={80} />
  <EmptyStateIllustration name="search" size={80} colored={false} />
  <EmptyStateIllustration name="favorites" size={80} />
</div>`,
    props: [
      { name: "name", type: "IllustrationName (19 options)", description: "Illustration name" },
      { name: "colored", type: "boolean", default: "true", description: "Colored or grey" },
      { name: "size", type: "number", default: "150", description: "Pixel size" },
    ],
  },

  // ── Feedback ──
  {
    slug: "alert",
    name: "Alert",
    description: "Contextual alerts with toast/banner variants and 4 states.",
    category: "feedback",
    code: `<div className="flex flex-col gap-3">
  <Alert state="information" title="Info" description="Informational alert." />
  <Alert state="success" title="Success" description="Operation completed." />
  <Alert state="warning" title="Warning" description="Review before continuing." />
  <Alert state="error" title="Error" description="Something went wrong." />
</div>`,
    props: [
      { name: "variant", type: '"toast" | "banner"', default: '"toast"', description: "Layout" },
      { name: "state", type: '"information" | "success" | "warning" | "error"', description: "State" },
      { name: "title", type: "string", description: "Title" },
      { name: "description", type: "string", description: "Description" },
    ],
  },
  {
    slug: "progress-bar",
    name: "ProgressBar",
    description: "Horizontal progress indicator with label and percentage.",
    category: "feedback",
    code: `<div className="flex flex-col gap-4 max-w-md">
  <ProgressBar value={72} label="Build progress" showPercentage />
  <ProgressBar value={100} label="Complete" size="sm" />
  <ProgressBar value={45} label="Upload" metadata="2.3 / 5.1 MB" />
</div>`,
    props: [
      { name: "value", type: "number", description: "Progress 0-100" },
      { name: "size", type: '"sm" | "lg"', default: '"lg"', description: "Size" },
      { name: "label", type: "string", description: "Label" },
      { name: "showPercentage", type: "boolean", description: "Show %" },
    ],
  },
  {
    slug: "progress-circle",
    name: "ProgressCircle",
    description: "Circular progress indicator with text display.",
    category: "feedback",
    code: `<div className="flex items-center gap-6">
  <ProgressCircle value={75} size="lg" showText />
  <ProgressCircle value={100} size="md" showText />
  <ProgressCircle value={30} size="sm" />
</div>`,
    props: [
      { name: "value", type: "number", description: "Progress 0-100" },
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Size" },
      { name: "showText", type: "boolean", description: "Show value text" },
    ],
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "Tooltip with 12 positions, light/dark themes, and actions.",
    category: "feedback",
    code: `<div className="flex items-center gap-8 py-6">
  <Tooltip content="Edit this item" position="top">
    <span className="cursor-pointer underline decoration-dotted text-grey-700">Hover for top tooltip</span>
  </Tooltip>
  <Tooltip content="More information" position="right">
    <Button variant="primary" size="sm">Hover me</Button>
  </Tooltip>
  <Tooltip content="Delete permanently" position="bottom" theme="light">
    <Button variant="destructive" size="sm">Delete</Button>
  </Tooltip>
</div>`,
    props: [
      { name: "content", type: "string", description: "Tooltip text" },
      { name: "position", type: "TooltipPosition (12 options)", description: "Placement" },
      { name: "theme", type: '"light" | "dark"', default: '"dark"', description: "Theme" },
    ],
  },

  // ── Layout ──
  {
    slug: "divider",
    name: "Divider",
    description: "Horizontal divider with label, icon, title, or action button.",
    category: "layout",
    code: `<div className="rounded-xl border border-white/8 bg-[#050505] p-6 space-y-6">
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="text-lg font-medium text-white">Billing preferences</h3>
      <p className="mt-1 text-[13px] text-white/45">Split sections cleanly between form groups.</p>
    </div>
    <Button variant="primary" size="sm">Save</Button>
  </div>

  <Divider />

  <div className="space-y-4">
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[13px] font-medium text-white">Payment method</p>
        <p className="text-[12px] text-white/35">Choose how invoices are paid</p>
      </div>
      <Button variant="grey" appearance="outlined" size="sm">Manage</Button>
    </div>

    <Divider variant="with-label" label="OR" />

    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[13px] font-medium text-white">Use a purchase order</p>
        <p className="text-[12px] text-white/35">Recommended for procurement teams</p>
      </div>
      <Button variant="grey" appearance="outlined" size="sm">Add PO</Button>
    </div>

    <Divider variant="with-title" label="Team invoices" />

    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[13px] font-medium text-white">Invite a teammate</p>
        <p className="text-[12px] text-white/35">They can view and export invoices</p>
      </div>
      <Button variant="primary" size="sm">Invite</Button>
    </div>

    <Divider variant="with-button" label="Need more help?" />
  </div>
</div>`,
    props: [
      { name: "variant", type: '"default" | "with-icon" | "with-label" | "with-title" | "with-button"', default: '"default"', description: "Variant" },
      { name: "label", type: "string", description: "Label text" },
    ],
  },
  {
    slug: "icon",
    name: "Icon",
    description: "Icon component with name lookup or direct icon data. Outline and solid variants.",
    category: "layout",
    code: `<div className="flex items-center gap-4">
  <Icon name="home" size="lg" />
  <Icon name="settings" size="md" />
  <Icon name="search" size="sm" />
  <Icon name="star" variant="solid" size="lg" />
  <Icon name="bell" size="md" />
</div>`,
    props: [
      { name: "name", type: "IconName", description: "Icon name (dynamic)" },
      { name: "icon", type: "IconRecord", description: "Icon data (tree-shakeable)" },
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | number', default: '"md"', description: "Size" },
      { name: "variant", type: '"outline" | "solid"', default: '"outline"', description: "Style" },
    ],
  },
];

export const categories = [
  { key: "forms", label: "Forms & Inputs" },
  { key: "navigation", label: "Navigation" },
  { key: "data-display", label: "Data Display" },
  { key: "feedback", label: "Feedback" },
  { key: "layout", label: "Layout" },
] as const;

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return componentRegistry.find((c) => c.slug === slug);
}
