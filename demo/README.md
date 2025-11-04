# Advanced Date Range Picker Demo

This is a demo application to test the Advanced Date Range Picker component.

## Setup

### Option 1: Using from Local File System (for development)

The demo is configured to use the package from the parent directory (`file:..`).

1. Make sure the parent package is built:
```bash
cd ..
npm run build
cd demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the dev server:
```bash
npm run dev
```

### Option 2: Using from Git Repository

To use the package from a git repository, update `demo/package.json`:

```json
{
  "dependencies": {
    "advanced-date-range-picker": "git+https://github.com/your-username/advanced-date-range-picker.git"
  }
}
```

Or for a specific branch:
```json
{
  "dependencies": {
    "advanced-date-range-picker": "git+https://github.com/your-username/advanced-date-range-picker.git#main"
  }
}
```

Then:
1. Install dependencies:
```bash
npm install
```

2. Start the dev server:
```bash
npm run dev
```

4. Open the browser to view the demo (usually http://localhost:5173)

## What This Demo Shows

- How to import and use the AdvancedDateRangePicker component
- How to import the required CSS file
- Proper Tailwind CSS configuration
- How to handle the component's callbacks

## Troubleshooting

If styles are not working:

1. Make sure Tailwind CSS is properly configured in `tailwind.config.js`
2. Verify the CSS file is imported in `index.css`
3. Check that the parent package is built (`npm run build` in the parent directory)
4. Ensure all dependencies are installed

