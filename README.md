
  

# Conference Explorer

  

## Preview

  

![List of conferences](https://awesomescreenshot.s3.amazonaws.com/image/4784631/54220973-11ca9de775a120629e2a4a3f9accf745.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20250501%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250501T025406Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=13ee9a5d54aa0939873c9d80753487157beed9fc79b74dd51b74abe50d8972a0)

  

# Details:

![enter image description here](https://awesomescreenshot.s3.amazonaws.com/image/4784631/54220971-cce9d037f6317796414936efbc29fa56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA/20250501/us-east-1/s3/aws4_request&X-Amz-Date=20250501T025604Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=3dd640dc6432ae6e912dce409301f02981e83408c5b07756fe6d85fc1d00333a)

  
  

---

  

## Language Selection

Users can switch the interface language using a language selector. The available options include:

  

-  **EN** – English

-  **FI** – Finnish

-  **DK** – Danish

-  **JP** – Japanese

  

The application updates UI text accordingly when a different language is selected.

  

---

  

## 1. Display List of Conferences

When the user lands on the index page, the application fetches data from a GraphQL API and displays the conferences in a multi-column responsive grid (on desktop devices). Each conference card includes the title, image, event dates, location, and an optional slogan. The list is ordered with the most recently added conferences appearing first.

  

---

  

## 2. Navigate to Conference Details

Once the index page is loaded, clicking on any conference card takes the user to that conference's dedicated details page. This enables users to explore more comprehensive information about the selected event.

  

---

  

## 3. Switch Between Sorting Options

While viewing the index page, users can select different sorting options. The conferences are re-ordered based on the chosen criteria, allowing users to switch between sorting by event date and sorting alphabetically by location.

  

### Sorting Options

Users can organize the list of conferences using a sorting control. The available sort modes are:

  

-  **By Location (A–Z)** – Sorts conferences alphabetically by their location name.

-  **By Date (Newest First)** – Sorts conferences in descending order based on their start date.

  

Switching between these modes dynamically updates the grid to reflect the selected sorting preference.

  
  
  

## My NPM Scripts

  

```jsonc

{
	// Starts the Next.js dev server for local development
	"dev": "next dev",

	// Builds the app for production deployment
	"build": "next build",

	// Starts the production server after build
	"start": "next start",

	// Runs Next.js linting to catch code issues
	"lint": "next lint",

	// Executes GraphQL codegen using the specified config to generate types/hooks
	"codegen": "graphql-codegen --config codegen.ts"
}