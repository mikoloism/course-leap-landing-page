## Folder Structure

```yaml
.
├── docs/
│	├── CHANGELOG.md
│	├── CREDITS.md
│	├── GUIDELINES.md
│	└── CONTRIBUTING.md
│
├── components/
│	├── atoms/
│	├── molecules/
│	├── organisms/
│	├── layouts/
│	└── templates/
│
├── pages/
│	├── api/**
│	├── [page-name].tsx
│	├── 404.tsx
│	├── _app.tsx
│	└── index.tsx
│
├── libs/
│	├── hooks
│	│	└── [global-hook-name]
│	│		├── [global-hook-name].ts
│	│		├── [global-hook-name].test.ts
│	│		└── index.ts
│	│
│	├── theme		 # tailwind configs and modules
│	│	├── configs
│	│	│	└── [property name / config name].js
│	│	│
│	│	├── [tailwind module styles]
│	│	│	└── index.ts # re-export module
│	│	│
│	│	└── index.ts # re-export as named modules (no configs)
│	│
│	└── index.ts	# export types, and interfaces
│
├── styles/**
│
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── next.config.json
├── jest.config.json
├── tsconfig.json
├── package.json
├── README.md
└── LICENSE
```

### Single Component

```yaml
{ atoms, molecules, organisms, layouts, templates }/
└── [ComponentName]/
	├── types.ts					# interfaces, types, enums, etc...
	├── hooks.ts					# if needed internal hooks
	├── hooks.test.ts				# if have hooks.ts
	├── [ComponentName].story.tsx	# if have to use storybook/ladle (also, `[Component].stories.tsx` accepted)
	├── [ComponentName].styled.tsx	# if have to based on styled-components or css objects
	├── [ComponentName].module.scss # if have to based on sass/scss module style as internal
	├── [ComponentName].scss		# if have to based on sass/scss import style (not as module, only import)
	├── [SubComponentName].tsx		# if have to use sub single component isn't any top
	├── [ComponentName].tsx
	└── index.tsx
```

- Component in `components/` directory should be one of the following types: `atoms/`, `molecules/`, `organisms/`, `layouts/` or `templates/`
- No Single file as Component accepted, All component should be in Directory
- Component should have a folder with following files : `index.tsx`, `[ComponentName].tsx`
- If Component use any types or interfaces (if not globally), should have `types.ts` file
- If Component have isolated hooks, should have `hooks.ts` file to export the functions, hooks and helpers
- If Component have `hooks.ts` file, should have `hooks.test.ts` file to testing the functions on the `hooks.ts` file
- If hooks or function is not just for this component and can be use in any other component, move it to `libs/hooks/` directory
- Stories and Storybook/Ladle component, should be named to `[ComponentName].story.tsx` or `[ComponentName].stories.tsx`. (stories not work in next.js)
- Style Base is just one of this conventions :
  - styled-components
  - css literal string
  - css property object
  - sass/scss/less/css as module style
  - sass/scss/less/css as style (not supported by next.js)
- styled-components: the style should be single file by `[ComponentName].styled.tsx` name
- css literal string: the style should be single file by `[ComponentName].styled.tsx` name
- sass/scss/less/css module style `[ComponentName].module.scss` or any file extension
- sass/scss/less/css component style should use `styles/components/[component-name].scss` or any file extension, then import at `styles/_globals.scss` file
- Content of the Component should be flexible, so, use the `$content` variable and the language support as default in english
  - if the `$content` variable is so long object, use `content.json` or `content.yaml` or `content.ts` and export each language by the iso name (e.g. English = en)
  - No any text accepted on the elements, only use the above conventions
- If SubComponent not is just single-file-component, move it to a new folder by the basic of component directory, then, Move ParentComponent from `atoms/` to `molecules/` or from `molecules/` to `organisms/`

### Page Component

```yaml
{ pages }/
├──	api/**
│
├── [page-with-parameter]/
│	├── [[parameter-of-page]].tsx
│	└── index.tsx
│
└── [page-name].tsx
```

- Each Page is a instance of the Template Component, Created at `components/templates/`. No Any Pages accepted without template
- Page Styles file should serve in `styles/pages/` directory
- No any prefix or suffix like `-page`, `page-` allowed
- Page content should be use from : (`yaml` is WIP)
  - `locales/[lang]/[page-name].[json | yaml]`
  - `contents/[lang]/[page-name].[json | yaml]`

### Styles

```yaml
.
└── styles/
	├── base/
	│	├── _color.scss
	│	└── _font.scss
	│
	├── utils/
	│	├── _center.scss
	│	├── _grid.scss
	│	└── _place.scss
	│
	├── components/
	│	└──	[component-name].scss # if didn't use styles in `components/` folder
	│
	├── pages/
	│	└──	[page-name].scss
	│
	└── globals.scss			 # also, `_globals.scss` accepted
```

This file tree only accepted when style based on `scss/sass/less`

### Atomic Pattern

- `atoms/` is just single selfed component can use commonly and be reusable components (didn't use of any other component)
- `molecules/` is components which use `atoms/` component or combined them as one eco-system component
- `organisms/` is components which use `molecules/` component or combined them as one eco-system component
- `layouts/` is components which use `organisms/` component or combined them as one eco-system component
- `templates/` the page templates and their eco-system and use each `atoms/`, `molecules/`, `organisms` or `Layouts/` their self
- `pages/`, should instance the `templates/` component and for the have isolated states (and globals states)
