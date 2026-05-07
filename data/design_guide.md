This is the technical design specification for cloning the Greenlawn Homes website.

## 1. Site Info

SITE_TYPE: Corporate Real Estate / Manufactured Homes
HTML_LANG: en

## 2. Color Token Mapping

```text
---DESIGN_MD_START---
## Visual Theme
A clean, professional real estate and community operator website using a nature-inspired color palette of deep greens, cream backgrounds, and gold accents with classic serif headings.

## Colors
- background: hsl(38, 30%, 95%)
- foreground: hsl(0, 0%, 10%)
- muted-foreground: hsl(0, 0%, 40%)
- border: hsl(0, 0%, 90%)
- surface: hsl(0, 0%, 100%)
- primary: hsl(132, 40%, 30%)
- primary-foreground: hsl(0, 0%, 100%)
- primary-hover: hsl(132, 40%, 20%)
- secondary: hsl(38, 30%, 95%)
- secondary-foreground: hsl(0, 0%, 10%)
- secondary-hover: hsl(38, 30%, 85%)
- dark: hsl(134, 32%, 15%)
- dark-foreground: hsl(0, 0%, 100%)
- dark-muted: hsl(0, 0%, 70%)
- dark-border: hsl(134, 32%, 25%)
- accent: hsl(42, 54%, 54%)

## Page Background
solid hsl(38, 30%, 95%)

## Typography
- Heading font: REQUIRED slug `fraunces`
- Body font: REQUIRED slug `inter`

## Components
- Buttons: Rounded corners (`rounded-[6px]`), distinct solid, outline, and surface variations. High contrast text. Default padding is generally px-5 py-2.5.
- Cards: White surface background (`bg-surface`), rounded corners (`rounded-[8px]`), overflow hidden, subtle border or shadow. Hover effect lifts the card up 2px (`transform translateY(-2px)`) and adds a soft shadow.
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 1920px (container max-width 1200px inside)
NAV_BACKGROUND: rgb(255, 255, 255) (bg-surface)
NAV_BORDER_RADIUS: none
NAV_POSITION: sticky
NAV_SHADOW: shadow-sm
SCROLL_BEHAVIOR: none

Link style:
- fontSize: text-[15px]
- fontWeight: font-semibold
- fontFamily: Inter
- textTransform: normal-case, do NOT use uppercase
- color: text-foreground
- activeColor: none

Logo:
- Size: w-[136px] h-[44px]
- Position: inside-nav
- Badge: Display the logo as a plain image with NO wrapper styling.

Dropdowns: "See Availability" (Wait, per visual review, there are no chevron dropdowns visible in the primary navigation header text links. Implement as standard links).

CTA button: The navigation features two distinct right-aligned items: 
1. Solid button "See Availability" - `bg-primary text-primary-foreground rounded-[6px] px-[20px] py-[10px] text-[14px] font-semibold`.
2. Text link "Already a Resident?" - `text-primary text-[15px] font-semibold`.

## 4. Section Plan

**Hero Section** id="hero"
- theme: DARK
- background: bg-dark
- text: text-dark-foreground
- heading color: text-dark-foreground
- heading size: text-[56px] font-bold leading-[1.1]
- body size: text-[20px] font-normal
- layout: flex column, max-w-[1200px] mx-auto, text aligned left.
- padding: py-[120px]
- content: "Homeownership, the way it should be." heading, paragraph below, and a row of two buttons.
- backgroundImage: cover photo of a community neighborhood.
- overlay: linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.38))
- buttons: 
  1. Solid button "Shop Available Homes" - `bg-primary text-primary-foreground rounded-[6px] px-[20px] py-[10px] text-[14px] font-semibold`.
  2. Outline button "Explore Our Communities" - `border-2 border-white text-white bg-transparent rounded-[6px] px-[30px] py-[14px] text-[17px] font-semibold`.

**Stats Bar** id="stats"
- theme: DARK
- background: bg-primary
- text: text-primary-foreground
- heading color: text-primary-foreground
- heading size: text-[40px] font-semibold (serif font)
- body size: text-[12px] uppercase tracking-wider font-semibold
- layout: grid 4 columns, items centered text, max-w-[1200px] mx-auto.
- padding: py-[60px]
- content: 4 data points (40+, 9, 2,000+, FAMILY-RUN).
- backgroundImage: none

**Features Icons Row** id="features-icons"
- theme: LIGHT
- background: bg-background
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[20px] font-semibold
- body size: text-[16px] font-normal
- layout: grid 3 columns, max-w-[1200px] mx-auto, gap-12.
- padding: py-[80px]
- content: 3 feature blocks (New & Pre-Owned Homes, 9 Communities, Family-Run). Top aligned SVG icons in dark green.
- backgroundImage: none

**Available Homes Showcase** id="available-homes"
- theme: LIGHT
- background: bg-background
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[40px] font-semibold
- body size: text-[16px] font-normal
- layout: flex column, top header has heading and "See All Homes" link. Below is a 3-column grid for cards. max-w-[1200px] mx-auto.
- padding: py-[80px]
- content: 6 property cards. 
- Cards details: `bg-surface rounded-[8px] border border-border overflow-hidden group hover:-translate-y-[2px] hover:shadow-md transition-all`. Top half is image with a top-right absolute badge (`bg-accent text-white px-2 py-1 text-[10px] uppercase font-bold rounded-bl-[4px]`). Bottom half padding-4: Price `text-[24px] font-semibold text-foreground`, specs (3 bed | 2 bath | 924 sqft) `text-muted-foreground text-[14px]`, Location `text-[14px] text-foreground`, bottom link "View Home".
- button: Centered at bottom: Solid button "See All Homes" - `bg-primary text-primary-foreground rounded-[6px] px-[20px] py-[10px] text-[14px] font-semibold`.

**Right Home Split** id="right-home"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[40px] font-semibold
- body size: text-[18px] font-normal leading-relaxed
- layout: grid 2 columns (1:1), gap-12, items-center. max-w-[1200px] mx-auto.
- padding: py-[80px]
- content: Left side: Red uppercase label `text-accent text-[12px] font-bold tracking-widest mb-4`, Heading, and two paragraphs. Right side: Large image.
- images: width 100%, aspect ratio 4/3, objectFit cover, `rounded-[8px]`.

**Our Communities Showcase** id="our-communities"
- theme: LIGHT
- background: bg-background
- text: text-muted-foreground
- heading color: text-foreground
- heading size: text-[40px] font-semibold
- layout: flex column, top header with heading and "See All Communities" link. Grid 3 columns for cards. max-w-[1200px] mx-auto.
- padding: py-[80px]
- content: 6 community cards. 
- Cards details: `bg-surface rounded-[8px] border border-border overflow-hidden group hover:-translate-y-[2px] hover:shadow-md transition-all`. Image on top with absolute top-left dark badge `bg-black/60 text-white px-2 py-1 text-[10px] uppercase`. Bottom half padding-5: Title `text-[20px] font-semibold text-foreground`, Location `text-[14px]`, "See availability ->" link.
- button: Centered at bottom: Solid button "See All Communities" - `bg-primary text-primary-foreground rounded-[6px] px-[20px] py-[10px] text-[14px] font-semibold`.

**Custom Build Section** id="custom-build"
- theme: DARK
- background: bg-primary
- text: text-primary-foreground/90
- heading color: text-primary-foreground
- heading size: text-[40px] font-semibold
- body size: text-[18px] font-normal leading-relaxed
- layout: grid 2 columns (1:1), gap-16, items-center. max-w-[1200px] mx-auto.
- padding: py-[100px]
- content: Left side: "BUILD NOW" small label, Heading, paragraph, Button. Right side: 2x2 grid of feature boxes.
- right boxes style: `bg-white/10 border border-white/20 rounded-[8px] p-6 text-white`. Includes small icon and text.
- button: Solid button "Start a Custom Build" - `bg-surface text-primary rounded-[6px] px-[32px] py-[16px] text-[17px] font-semibold`.

**Financing Section** id="financing"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[40px] font-semibold
- body size: text-[16px] font-normal
- layout: grid 2 columns (1:1), gap-16, items-start. max-w-[1200px] mx-auto.
- padding: py-[100px]
- content: Left side: "FINANCING" label, Heading "Homes from $X,XXX a month.", paragraph, bulleted list with check icons, button. Right side: White form card.
- left button: Solid button "Start Prequalification" - `bg-primary text-primary-foreground rounded-[6px] px-[20px] py-[10px] text-[14px] font-semibold`.
- right form card: `bg-surface p-8 rounded-[8px] shadow-sm border border-border`. Title "Quick Prequalification". Form fields: Select dropdowns for "Are you buying with a financing?", "Credit range", "Employment". Input field for "Email". 
- right form button: Solid button "See What I Qualify For" - `bg-primary text-primary-foreground w-full rounded-[6px] px-[20px] py-[14px] text-[15px] font-semibold mt-4`.

**Quiz Section** id="quiz"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[32px] font-semibold
- layout: flex column items-center text-center. max-w-[800px] mx-auto.
- padding: py-[80px]
- content: Heading "Help me find the right home.", paragraph. Below is a large interactive card.
- card style: `bg-surface p-8 rounded-[8px] shadow-sm border border-border w-full text-left mt-8`. Step indicator "Step 1 of 7". Heading "What are you looking for today?". List of 5 radio button options (e.g., "I want to buy a pre-owned home", "I want to order a brand new home", etc.).
- button: Solid button "Continue" - `bg-muted-foreground/30 text-white rounded-[6px] px-[24px] py-[10px] text-[14px] font-semibold ml-auto block mt-6` (Appears disabled).

**Resident Section** id="resident"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[32px] font-semibold
- layout: flex column items-center text-center max-w-[600px] mx-auto.
- padding: py-[60px]
- content: Heading, paragraph, button.
- button: Solid button "Find My Community" - `bg-primary text-primary-foreground rounded-[6px] px-[20px] py-[10px] text-[14px] font-semibold mt-6`.

**Story Section** id="story"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[32px] font-semibold
- layout: grid 2 columns (1:1), gap-12, items-center max-w-[1200px] mx-auto.
- padding: py-[80px]
- content: Left side image `rounded-[8px] object-cover`. Right side: Heading, paragraph, text link "Read our full story".

**Team Section** id="team"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[32px] font-semibold
- layout: top text center, followed by a 3 column grid for cards. max-w-[1200px] mx-auto.
- padding: py-[80px]
- content: Header "Meet the Greenlawn family." Card style: `bg-surface rounded-[8px] border border-border p-8 text-center flex flex-col items-center`. Circular image at top (`w-[100px] h-[100px] rounded-full bg-secondary`), Name in bold `text-[20px]`, Role `text-muted-foreground text-[14px] mb-4`, Bio paragraph.

**Contact Section** id="contact"
- theme: LIGHT
- background: bg-background
- text: text-foreground
- heading color: text-foreground
- heading size: text-[40px] font-semibold
- layout: grid 2 columns (1:1), gap-12 items-center max-w-[1200px] mx-auto.
- padding: py-[80px] pb-[120px]
- content: Left side: Heading "Come see us.", 3 lines of contact info with left icons (Hours, Phone, Location). Right side: White card `bg-surface p-8 rounded-[8px] border border-border`. Paragraph text, and button.
- button: Solid button "Get in Touch" - `bg-primary text-primary-foreground rounded-[6px] px-[24px] py-[12px] text-[15px] font-semibold mt-6`.

## 5. Favicon
None provided in data. Leave as default.

## 6. Footer
Style: bg-dark
Text color: text-dark-muted
Headings color: text-accent text-[12px] uppercase tracking-wider font-bold mb-4
Columns: 4 columns
Layout: grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 max-w-[1200px] mx-auto py-[80px]
Column 1: Logo image, Address, Phone "(614) 443-7421", Hours "M-F 9am-5pm".
Column 2: Heading "QUICK LINKS". Links: Shop Homes, Communities, Our Story, Contact, Get Prequalified, Build New, Greenlawn Companies ↗.
Column 3: Heading "OUR COMMUNITIES". Links: Big Run Bluffs, Parsons Mobile Home Park, Foxlair Farms, Willowbrook Terrace, Wagon Wheel, Enchanted Acres, Casal Court, Buckeye Lake Estates, Washington Manor. (Render as two sub-columns if necessary, or let flex handle it. Screenshot shows 2 columns within this group).
Column 4: Heading "CONTACT". Text "Central Ohio", Phone "(614) 443-7421", Link "Send us a message ->" (colored text-accent).
Bottom Bar: Border top `border-dark-border`, flex row between copyright "© 2026 Greenlawn Homes..." and text "Proud dealer of Redman Homes & Adventure Homes".

## 7. Files
MODIFY: Navigation.astro, Footer.astro, site.ts, global.css
CREATE: src/components/home/Hero.astro, src/components/home/StatsBar.astro, src/components/home/FeaturesIcons.astro, src/components/home/AvailableHomes.astro, src/components/home/RightHome.astro, src/components/home/OurCommunities.astro, src/components/home/CustomBuild.astro, src/components/home/Financing.astro, src/components/home/Quiz.astro, src/components/home/Resident.astro, src/components/home/Story.astro, src/components/home/Team.astro, src/components/home/Contact.astro