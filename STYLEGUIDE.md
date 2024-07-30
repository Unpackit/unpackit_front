# Project Guidelines
This project utilizes Prettier, ESLint, and Husky pre-commit hooks to ensure consistent code quality and style.

## 📏 Coding Standards
- Maximum Line Length: Code lines should not exceed 80 characters.
- Indentation: Spaces should be used for indentation, avoiding tabs.
- Semicolons: Each statement should be terminated with a semicolon.
- Quotes: Single quotes `(' ')` should be used for strings.
- Trailing Commas: Objects and arrays should have trailing commas for the last item.
- Brackets Spacing: There should be spaces between brackets in object literals.
- Arrow Functions: If an arrow function has a single parameter, parentheses should be omitted.
- HTML Element Formatting: In multi-line HTML elements, the closing > should be placed on the same line as the last attribute.

## 📝 Commit Message Format
Commit messages should begin with one of the following keywords:
- fix: A bug fix.
- feature: A new feature.
- docs: Documentation changes.
- style: Code style changes (formatting, missing semicolons, etc.).
- refactor: Code changes that neither fix a bug nor add a feature.
- test: Adding or updating tests.
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation.
- revert: Reverting a previous commit.

`Commit messages should be in lowercase English.`

## 🛠️ Naming Conventions
### Compnents
- Component Selector: Use kebab-case.
- Directive Selector: Use camelCase.

### Styles:
- Follow the BEM (Block, Element, Modifier) specification, using kebab-case.

## 🏗️ Architecture Guidelines
- Authentication: Use Supabase for authentication.
- Reactive Programming: Utilize RxJS for reactive programming.
- State Management: NgRx should be used as the single source of truth for state management.
- Component Organization: Separate reusable components from pages.
- Styling: Common styles should be placed in a styles file, and all fonts should be in a dedicated fonts file.
- Mixins: Use mixins for combining several styles.
