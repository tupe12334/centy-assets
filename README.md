# @centy-io/assets

Centy brand assets - logos, icons, and design resources.

## Installation

```bash
pnpm add @centy-io/assets
```

## Usage

Import logo files directly in your project:

```typescript
// Import as URL (for bundlers like Vite, webpack)
import logoColor from '@centy-io/assets/logos/logo-color.svg'
import logoBlack from '@centy-io/assets/logos/logo-black.svg'

// Use in React
<img src={logoColor} alt="Centy Logo" />
```

## Available Assets

### Logos

| File             | Description           |
| ---------------- | --------------------- |
| `logo-color.svg` | Full-color brand logo |
| `logo-black.svg` | Black monochrome logo |

## License

MIT
