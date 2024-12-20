

# Expert Dashboard

A React-based dashboard application for experts to monitor their consultations, sales, and performance metrics.
## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone git_url
   ```

2. Install dependencies:
   ```bash
   cd directory_name
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Features

- At-a-glance metrics showing:
  - Number of consultations
  - Orders placed and conversion rates
  - Total and average order values
  - Commission earned
- Interactive data visualization with charts
- Time period selection (7/15/30/60 days)
- Real-time consultation tracking
- Sales performance comparison
- Future forecast predictions 

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- SVG Icons

## Implementations
- created fake APIs which returns data after a small timeout
- Created customizable reusable components for layouts and other widgets.
- Implemented loader while fetching the data
- If the data is empty it will show "No Data Available"
- Immplemented fetching another sample data from fake API When changing value of dropdown
- currency symbol is made as dynamic fetching of symbol based on currency provided in API (as of now added few currencies in a common function in utils folder)
- percentage increase and decrease icon are made as dynamic based on percentage value from API.
- created a barchart component with d3js and dynamically rendering the charts based on data
- Added interactivity to the charts(when hovering a bar will appear around hovered area and also tooltip will show the hovered data)
- Implemented date and time conversion from a format like "2024-12-18T19:00:00Z" (format getting from fake API) to proper date and time format that user understands


- Note: Few optimizations was not able to finish due to time constraints. I have tried maximum to finish whatever is possible in a small amount of time which I got.
