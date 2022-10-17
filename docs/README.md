# Next Landing Page

## Preview (DEMO)

- 🚧 [Codepen][codepen-preview-link]
- 🚧 [Github Page][github-page-link]
- 🚧 [Vercel Page][vercel-page-link]

## Docs

### Hooks

#### `createElement` (\*)

parameters :

| #   | parameter    | type (\*\*)    | required | default | description                               |
| --- | ------------ | -------------- | -------- | ------- | ----------------------------------------- |
| 1   | elementName  | `ElementType`  | `true`   | `span`  | the element name to create as jsx element |
| 2   | elementProps | `ElementProps` | `true`   | `{}`    | element attributes and children           |

generic parameters :

| #   | parameter    | type   | required | default | description                        |
| --- | ------------ | ------ | -------- | ------- | ---------------------------------- |
| 1   | ElementType  | `type` | `true`   | -       | The Type to validate `elementName` |
| 2   | ElementProps | `type` | `true`   | -       | The Type to validate the `Props`   |

return type : `JSX.Element`

(\*) : `createElement` is generic function\
(\*\*) : type of the parameters refer to generic types (typeof of elementProps is interface of default react props)

#### `useContent` (\*)

parameters (ordered) :

| #   | parameter | type             | required | default     | description                                   |
| --- | --------- | ---------------- | -------- | ----------- | --------------------------------------------- |
| 1   | page      | `string`         | `true`   | `undefined` | name of the page-name on `locales/` directory |
| 2   | section   | `string`         | `true`   | `'common'`  | layout name on the page                       |
| 3   | language  | `'en'` or `'pr'` | `false`  | `'en'`      | the language name on `locales/` directory     |

parameters (objected) (\*\*) :

| #   | parameter | type     | required | default | description                      |
| --- | --------- | -------- | -------- | ------- | -------------------------------- |
| 1   | options   | `object` | `true`   | `{}`    | options object of the parameters |

return type : `IReturnType` (\*\*\*)

(\*) : `useContent` is overridden function to `ordered parameters` or `objected parameters`\
(\*\*) : properties of `objected parameter` is same of `ordered parameters`\
(\*\*\*) : `IReturnType` is interface :

```typescript
interface IReturnType {
  // return the current language
  getLanguage: () => string;

  //   return the current text of sub-section
  content: (subSection: string) => string;
}
```

### Types

#### `libs/common.ts`

- `classnames` :\
  re-exported `classNames` library as named module

- `Link` and `Image` :\
  re-exported `Next.js` `Image` and `Link` modules

- `PropsWithClassName` :\
  generic type to contain props with `{ className?: string }`

- `PropsWithChildren` :\
  re-exported generic type of `React.PropsWithChildren`

- `PropsWithStyle` :\
  generic type to contain props with `{ style?: object }`

- `PropsWithCommon` :\
  generic type to combine `PropsWithChildren` and `PropsWithClassName` with props

- `PropsWithAll` :\
  generic type to combine `PropsWithCommon` and `PropsWithStyle` with props

### Themes

Any helpful constants, function, classes and types to work with tailwind classname. Exactly the utils to return tailwind classnames from properties

### Themes/Configs

Javascript files to contain properties of `tailwind.config.js` as default value

## Targets

- [x] Can i use Next.js
- [x] Can i use Typescript for typing and more
- [x] Can i use TailwindCSS classnames as statically dynamically
- [x] Can i keep S.O.L.I.D Principles in project (main target)
- [x] Can i keep the codebase clean
- [ ] Can i create re-usable component

## License

Under [MIT][mit-license-file-path] License

Created With 🧠 & ☕ By [@mikoloism][github-link]

<!-- LINKS -->

[github-link]: https://github.com/mikoloism "click here to see another projects and social links"
[mit-license-file-path]: ./LICENSE "click here to see license file"
[codepen-preview-link]: https://codepen.io/miko-github
[github-page-link]: https://mikoloism.github.io/mikoloism
[vercel-page-link]: https://course-leap.vercel.app
