# Copilot Instructions — Untitled UI Vite Starter Kit

## Architecture

React 19 + TypeScript component library built on **React Aria Components** for accessibility, styled with **Tailwind CSS v4.1**, bundled with Vite. Path alias `@/` maps to `src/`.

- `src/components/base/` — Core UI primitives (Button, Input, Select, Checkbox, etc.)
- `src/components/application/` — Complex composed components (Table, Modal, DatePicker, Tabs)
- `src/components/foundations/` — Design tokens, icons, rating elements
- `src/styles/theme.css` — Full design token system (1300+ lines of CSS variables)
- `src/providers/` — ThemeProvider (light/dark via `dark-mode` class), RouteProvider (React Aria ↔ React Router bridge)

## Critical Conventions

### React Aria Imports — ALWAYS prefix with `Aria*`

```typescript
// ✅ Required — prevents collisions with local wrapper components
import { Button as AriaButton, TextField as AriaTextField } from "react-aria-components";
// ❌ Never use bare imports
import { Button, TextField } from "react-aria-components";
```

### File Naming — kebab-case only

All files: `date-picker.tsx`, `api-client.ts`, `auth-context.tsx`. Never PascalCase or camelCase filenames.

### Semantic Color Classes — NEVER use raw color scales

```typescript
// ✅ Use semantic tokens that adapt to light/dark mode
"text-primary bg-secondary border-brand text-fg-quaternary bg-brand-solid";
// ❌ Never use raw Tailwind colors
"text-gray-900 bg-gray-50 border-purple-600 bg-blue-700";
```

Categories: `text-*`, `bg-*`, `border-*`, `fg-*` (foreground for icons). See `src/styles/theme.css` for the full token list.

## Component Patterns

### Style Organization with `sortCx` and `cx`

Styles are defined as structured objects outside the component using `sortCx` (a no-op that enables Tailwind IntelliSense), then merged at render with `cx` (extended `tailwind-merge`):

```typescript
import { cx, sortCx } from "@/utils/cx";

export const styles = sortCx({
    common: { root: "base-classes", icon: "icon-classes" },
    sizes: {
        sm: { root: "small-classes" },
        md: { root: "medium-classes" },
    },
    colors: {
        primary: { root: "primary-classes" },
    },
});

// Applied via:
cx(styles.common.root, styles.sizes[size].root, styles.colors[color].root, className);
```

Long class strings use array `.join(" ")` for readability.

### Compound Components — Dot Notation

Complex components use type-asserted mutation to attach sub-components:

```typescript
const _Select = Select as typeof Select & {
    ComboBox: typeof ComboBox;
    Item: typeof SelectItem;
};
_Select.ComboBox = ComboBox;
_Select.Item = SelectItem;
export { _Select as Select };
```

Simpler groups use plain object literals (see `Dropdown`). Always add `.displayName` to wrapper components.

### Icon Props — Dual FC/ReactNode Pattern

Icons accept both component references and rendered elements:

```typescript
icon?: FC<{ className?: string }> | ReactNode;

// Rendering — check type at runtime
{isValidElement(Icon) && Icon}
{isReactComponent(Icon) && <Icon data-icon className="size-5" />}
```

The `data-icon` attribute enables parent-level styling via `*:data-icon:size-5 *:data-icon:text-fg-quaternary`.

### React Aria className Render Props

When wrapping React Aria components, always handle the className function pattern:

```typescript
className={(state) =>
    cx("base-classes", state.isFocused && "focus-classes",
       typeof props.className === "function" ? props.className(state) : props.className)
}
```

## Commands & Workflow

```bash
npm run dev              # Vite dev server at http://localhost:5173
npm run build            # TypeScript check + Vite production build
npm run storybook        # Storybook at http://localhost:6006
npm run build-storybook  # Static Storybook build
npm run test-storybook   # Run Storybook interaction tests
```

### Storybook-Driven Development

Components are developed and tested in Storybook (v10). When adding or modifying components:

1. Run `npm run storybook` to launch the dev environment
2. Stories live alongside components — use Storybook to visually verify all size/color variants and states
3. The project includes `forgekit-storybook-mcp` for AI-assisted Storybook workflows
4. Run `npm run test-storybook` to validate interaction tests before committing

## Key Dependencies

- `react-aria-components` — Accessible component primitives (all wrapped with `Aria*` prefix)
- `tailwind-merge` (via `cx`) — Class conflict resolution
- `motion` (Framer Motion) — Complex animations
- `@untitledui/icons` — 1,100+ line icons; import named: `import { Home01 } from "@untitledui/icons"`
- `react-router` v7 — Routing, bridged to React Aria via `RouteProvider`
- `tailwindcss-react-aria-components` — Tailwind plugin for React Aria state variants (`data-focused:`, `data-selected:`, etc.)

## Component API Quick Reference

### Button (`@/components/base/buttons/button`)

- **size**: `"sm" | "md" | "lg" | "xl"` (default `"sm"`)
- **color**: `"primary" | "secondary" | "tertiary" | "link-gray" | "link-color" | "primary-destructive" | "secondary-destructive" | "tertiary-destructive" | "link-destructive"`
- **iconLeading / iconTrailing**: `FC | ReactNode`
- **isLoading**, **showTextWhileLoading**, **isDisabled**
- **No Link component** — use `<Button href="/path" color="link-color">` instead

```typescript
<Button iconLeading={Check} color="primary" size="md">Save</Button>
<Button href="/settings" color="link-gray" iconLeading={Settings01}>Settings</Button>
```

### Input (`@/components/base/input/input`)

- **size**: `"sm" | "md"` — **label**, **placeholder**, **hint**, **tooltip**
- **icon**: `FC` (leading icon) — **isRequired**, **isDisabled**, **isInvalid**

```typescript
<Input icon={Mail01} label="Email" isRequired isInvalid hint="Please enter a valid email" />
```

### Select (`@/components/base/select/select`)

Compound: `Select.Item`, `Select.ComboBox`. Also `MultiSelect` from `select/multi-select`.

- **items**: `Array` — **placeholderIcon**: `FC | ReactNode`
- Item props: **id**, **supportingText**, **icon**, **avatarUrl**

```typescript
<Select label="Team member" items={users}>
  {(item) => <Select.Item id={item.id} supportingText={item.email}>{item.name}</Select.Item>}
</Select>
```

### Checkbox (`@/components/base/checkbox/checkbox`)

- **size**: `"sm" | "md"` — **label**, **hint** — **isSelected**, **isIndeterminate**, **isDisabled**

### Badge (`@/components/base/badges/badges`)

`Badge`, `BadgeWithDot`, `BadgeWithIcon` — **size**: `"sm" | "md" | "lg"` — **color**: `"gray" | "brand" | "error" | "warning" | "success"` + extended palette — **type**: `"pill-color" | "color" | "modern"`

### Avatar (`@/components/base/avatar/avatar`)

- **size**: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl"` — **src**, **initials**, **status**: `"online" | "offline"`
- `AvatarLabelGroup`: **title**, **subtitle** props for labeled avatars

### FeaturedIcon (`@/components/foundations/featured-icon/featured-icon`)

- **icon**: `FC` (required) — **size**: `"sm" | "md" | "lg" | "xl"`
- **color**: `"brand" | "gray" | "error" | "warning" | "success"`
- **theme**: `"light" | "gradient" | "dark" | "modern" | "modern-neue" | "outline"` — `modern`/`modern-neue` are **gray only**

## Semantic Color Tokens

**NEVER use raw scales** (`text-gray-900`, `bg-blue-700`). Always use semantic tokens from `src/styles/theme.css`. These work with `ring-`, `outline-`, `stroke-`, `fill-` prefixes too.

### Text Colors

| Token                  | Usage                                          |
| :--------------------- | :--------------------------------------------- |
| `text-primary`         | Page headings, primary text                    |
| `text-secondary`       | Labels, section headings                       |
| `text-tertiary`        | Supporting/paragraph text                      |
| `text-quaternary`      | Subtle low-contrast text                       |
| `text-disabled`        | Disabled inputs/buttons                        |
| `text-placeholder`     | Input placeholders                             |
| `text-brand-primary`   | Brand headings (e.g. pricing cards)            |
| `text-brand-secondary` | Accented text, brand buttons                   |
| `text-error-primary`   | Error state text                               |
| `text-warning-primary` | Warning state text                             |
| `text-success-primary` | Success state text                             |
| `text-white`           | Always white regardless of mode                |
| `text-*_on-brand`      | Text on solid brand backgrounds (CTA sections) |

### Border Colors

Also applies to `ring-*` and `outline-*`.

| Token              | Usage                                        |
| :----------------- | :------------------------------------------- |
| `border-primary`   | High contrast — inputs, checkboxes           |
| `border-secondary` | Default for most components, cards, dividers |
| `border-tertiary`  | Subtle dividers, chart axes                  |
| `border-disabled`  | Disabled component borders                   |
| `border-brand`     | Active/focus states (e.g. focused inputs)    |
| `border-error`     | Error state borders                          |

### Foreground Colors (Icons)

Use via `text-fg-*` for icon coloring.

| Token                  | Usage                                |
| :--------------------- | :----------------------------------- |
| `fg-primary`           | Highest contrast icons               |
| `fg-secondary`         | Standard icons                       |
| `fg-tertiary`          | Medium contrast icons                |
| `fg-quaternary`        | Subtle icons (buttons, help, inputs) |
| `fg-disabled`          | Disabled icons                       |
| `fg-brand-primary`     | Brand icons, progress bars           |
| `fg-error-secondary`   | Error state icons in inputs          |
| `fg-success-secondary` | Online indicators, positive metrics  |

### Background Colors

| Token                | Usage                                  |
| :------------------- | :------------------------------------- |
| `bg-primary`         | Default white background               |
| `bg-primary_hover`   | Hover state for white backgrounds      |
| `bg-primary-solid`   | Dark background (tooltips)             |
| `bg-secondary`       | Contrast sections, website backgrounds |
| `bg-secondary_hover` | Hover for gray backgrounds (nav items) |
| `bg-tertiary`        | Higher contrast fills (toggles)        |
| `bg-active`          | Selected menu items                    |
| `bg-disabled`        | Disabled buttons/toggles               |
| `bg-overlay`         | Modal overlays                         |
| `bg-brand-solid`     | Brand fills (toggles, messages)        |
| `bg-brand-section`   | Brand website sections (CTAs)          |
| `bg-error-solid`     | Error buttons, destructive actions     |
