import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

const articles = {
  "whats-wrong-with-your-grill": {
    title: "What's Wrong With Your Grill?",
    date: "October 12",
    author: "Michael Chen",
    image: "/broken-grill-repair.jpg",
    content: `
      <p>Is your grill not heating up properly? Are you experiencing uneven cooking or strange odors? These are common signs that something might be wrong with your grill. In this comprehensive guide, we'll walk you through the most common grill problems and how to diagnose them.</p>

      <h2>Common Grill Problems</h2>
      
      <h3>1. Uneven Heat Distribution</h3>
      <p>One of the most frustrating issues grillers face is uneven heat distribution. This can result in food that's burnt on one side and undercooked on the other. Common causes include:</p>
      <ul>
        <li>Clogged burners or venturi tubes</li>
        <li>Damaged heat deflectors or flavorizer bars</li>
        <li>Worn-out grates that don't retain heat properly</li>
        <li>Gas flow issues in propane or natural gas grills</li>
      </ul>

      <h3>2. Grill Won't Light or Stay Lit</h3>
      <p>If your grill won't ignite or keeps going out, the problem could be:</p>
      <ul>
        <li>Empty propane tank or low gas pressure</li>
        <li>Faulty igniter or electrode</li>
        <li>Clogged burner ports</li>
        <li>Damaged gas regulator</li>
        <li>Spider webs or debris in the venturi tubes</li>
      </ul>

      <h3>3. Excessive Flare-Ups</h3>
      <p>While some flare-ups are normal, excessive flames can char your food and create a fire hazard. This is usually caused by:</p>
      <ul>
        <li>Grease buildup on heat deflectors</li>
        <li>Damaged or missing flavorizer bars</li>
        <li>Cooking overly fatty meats without proper preparation</li>
      </ul>

      <h3>4. Rust and Corrosion</h3>
      <p>Rust is the enemy of any grill. It can compromise structural integrity and contaminate your food. Key areas to check:</p>
      <ul>
        <li>Grates and cooking surfaces</li>
        <li>Burner tubes</li>
        <li>Firebox and lid</li>
        <li>Gas lines and connections</li>
      </ul>

      <h2>Troubleshooting Steps</h2>

      <h3>Step 1: Visual Inspection</h3>
      <p>Start with a thorough visual inspection of your grill. Look for obvious signs of damage, rust, or wear. Check all gas connections for leaks using soapy water – bubbles indicate a leak.</p>

      <h3>Step 2: Clean Thoroughly</h3>
      <p>Many grill problems can be solved with a deep cleaning. Remove and clean:</p>
      <ul>
        <li>Grates and cooking surfaces</li>
        <li>Burner tubes and ports</li>
        <li>Heat deflectors and flavorizer bars</li>
        <li>Grease tray and drip pan</li>
        <li>Venturi tubes (check for spider webs)</li>
      </ul>

      <h3>Step 3: Test Components</h3>
      <p>Test each component individually:</p>
      <ul>
        <li>Igniter: Should produce a clicking sound and visible spark</li>
        <li>Burners: Should light evenly across all ports</li>
        <li>Gas flow: Should be consistent and adjustable</li>
        <li>Temperature gauge: Should accurately reflect grill temperature</li>
      </ul>

      <h2>When to Replace vs. Repair</h2>
      
      <p>Sometimes repair isn't worth the cost. Consider replacement if:</p>
      <ul>
        <li>The firebox has rusted through</li>
        <li>Multiple major components need replacement</li>
        <li>The grill is more than 10 years old</li>
        <li>Repair costs exceed 50% of a new grill's price</li>
      </ul>

      <h2>Preventive Maintenance</h2>
      
      <p>Prevent future problems with regular maintenance:</p>
      <ul>
        <li>Clean grates after each use</li>
        <li>Deep clean the entire grill every 3-4 months</li>
        <li>Cover your grill when not in use</li>
        <li>Check gas connections annually</li>
        <li>Replace worn parts promptly</li>
        <li>Store propane tanks properly</li>
      </ul>

      <h2>Safety First</h2>
      
      <p>Always prioritize safety when troubleshooting grill problems:</p>
      <ul>
        <li>Turn off gas and disconnect tanks before working on the grill</li>
        <li>Never use a grill indoors or in enclosed spaces</li>
        <li>Keep a fire extinguisher nearby</li>
        <li>If you smell gas, turn everything off immediately and check for leaks</li>
        <li>Don't attempt repairs beyond your skill level – call a professional</li>
      </ul>

      <p>By understanding common grill problems and how to address them, you can extend the life of your grill and ensure safe, delicious cooking for years to come. Regular maintenance and prompt attention to issues will keep your grill performing at its best.</p>
    `,
  },
  "how-to-clean-your-grill-like-a-pro": {
    title: "How to Clean Your Grill Like a Pro",
    date: "October 15",
    author: "Dakota Miller",
    image: "/cleaning-grill.jpg",
    content: `
      <p>A clean grill is essential for great-tasting food and safe cooking. Regular cleaning prevents flare-ups, extends your grill's lifespan, and ensures your food doesn't pick up old, burnt flavors. Here's our comprehensive guide to cleaning your grill like a professional.</p>

      <h2>Why Grill Cleaning Matters</h2>
      
      <p>Regular grill cleaning isn't just about aesthetics – it's crucial for:</p>
      <ul>
        <li>Food safety and preventing cross-contamination</li>
        <li>Better-tasting food without old burnt residue</li>
        <li>Preventing dangerous flare-ups from grease buildup</li>
        <li>Extending the life of your grill components</li>
        <li>Maintaining even heat distribution</li>
      </ul>

      <h2>Essential Cleaning Tools</h2>
      
      <p>Before you start, gather these tools:</p>
      <ul>
        <li>Grill brush with stainless steel bristles (or bristle-free alternative)</li>
        <li>Putty knife or grill scraper</li>
        <li>Bucket of warm, soapy water</li>
        <li>Sponges and cleaning cloths</li>
        <li>Degreaser or grill cleaning spray</li>
        <li>Aluminum foil</li>
        <li>Rubber gloves</li>
        <li>Shop vacuum (optional but helpful)</li>
      </ul>

      <h2>Quick Clean After Each Use</h2>
      
      <h3>The 5-Minute Post-Cook Clean</h3>
      <p>After every grilling session, while the grill is still warm:</p>
      <ol>
        <li>Turn burners to high for 10-15 minutes to burn off residue</li>
        <li>Turn off and let cool slightly (still warm but safe to touch)</li>
        <li>Brush grates thoroughly with a grill brush</li>
        <li>Wipe down exterior surfaces</li>
        <li>Empty grease tray if needed</li>
      </ol>

      <h2>Deep Clean: Step-by-Step Guide</h2>
      
      <h3>Step 1: Prepare Your Grill</h3>
      <ul>
        <li>Turn off gas and disconnect propane tank</li>
        <li>Remove grates, flavorizer bars, and burner covers</li>
        <li>Take out drip pan and grease tray</li>
      </ul>

      <h3>Step 2: Clean the Grates</h3>
      <p>For cast iron or stainless steel grates:</p>
      <ul>
        <li>Soak in warm, soapy water for 30 minutes</li>
        <li>Scrub with grill brush or steel wool</li>
        <li>For stubborn residue, use a paste of baking soda and water</li>
        <li>Rinse thoroughly and dry completely</li>
        <li>Season cast iron grates with cooking oil</li>
      </ul>

      <h3>Step 3: Clean Flavorizer Bars and Heat Deflectors</h3>
      <ul>
        <li>Scrape off debris with putty knife</li>
        <li>Wash with soapy water</li>
        <li>Use degreaser for heavy buildup</li>
        <li>Rinse and dry completely</li>
      </ul>

      <h3>Step 4: Clean the Burners</h3>
      <p>Burners require careful cleaning to maintain proper gas flow:</p>
      <ul>
        <li>Remove burners according to manufacturer instructions</li>
        <li>Use a wire brush to clean ports and remove clogs</li>
        <li>Check venturi tubes for spider webs or debris</li>
        <li>Wipe down with damp cloth</li>
        <li>Ensure all ports are clear before reinstalling</li>
      </ul>

      <h3>Step 5: Clean the Firebox</h3>
      <ul>
        <li>Scrape bottom and sides with putty knife</li>
        <li>Vacuum out loose debris</li>
        <li>Wipe down with degreaser and damp cloth</li>
        <li>Check for rust or damage</li>
      </ul>

      <h3>Step 6: Clean Grease Management System</h3>
      <ul>
        <li>Empty and clean drip pan</li>
        <li>Wash grease tray with hot, soapy water</li>
        <li>Line with aluminum foil for easier future cleaning</li>
        <li>Check grease trap and clean if applicable</li>
      </ul>

      <h3>Step 7: Exterior Cleaning</h3>
      <ul>
        <li>Wipe down lid and exterior with appropriate cleaner</li>
        <li>Use stainless steel cleaner for stainless surfaces</li>
        <li>Clean control knobs and handles</li>
        <li>Wipe down side tables and shelves</li>
        <li>Clean wheels and base</li>
      </ul>

      <h2>Cleaning Different Grill Types</h2>

      <h3>Gas Grills</h3>
      <p>Focus on burner maintenance and grease management. Check gas connections annually.</p>

      <h3>Charcoal Grills</h3>
      <p>Empty ash after each use. Deep clean grates and interior every few uses. Check vents for blockages.</p>

      <h3>Pellet Grills</h3>
      <p>Vacuum out ash from firepot regularly. Clean temperature probe. Check auger for jams.</p>

      <h3>Ceramic Grills</h3>
      <p>Never use water on hot ceramic. Burn off residue at high heat. Clean gaskets carefully.</p>

      <h2>Cleaning Schedule</h2>

      <h3>After Every Use:</h3>
      <ul>
        <li>Burn off residue</li>
        <li>Brush grates</li>
        <li>Empty grease tray if full</li>
      </ul>

      <h3>Monthly (or every 5-10 uses):</h3>
      <ul>
        <li>Deep clean grates</li>
        <li>Clean flavorizer bars</li>
        <li>Empty and clean grease management system</li>
      </ul>

      <h3>Seasonally (3-4 times per year):</h3>
      <ul>
        <li>Complete deep clean</li>
        <li>Inspect and clean burners</li>
        <li>Check for rust or damage</li>
        <li>Clean exterior thoroughly</li>
      </ul>

      <h2>Pro Tips</h2>

      <ul>
        <li>Clean while grill is slightly warm for easier residue removal</li>
        <li>Use aluminum foil to line drip pans for quick cleanup</li>
        <li>Keep a spray bottle of vinegar water for quick wipe-downs</li>
        <li>Oil grates after cleaning to prevent rust and sticking</li>
        <li>Replace grill brush annually for safety</li>
        <li>Consider bristle-free brushes to avoid bristle contamination</li>
      </ul>

      <h2>What to Avoid</h2>

      <ul>
        <li>Never use oven cleaner on grill grates</li>
        <li>Don't use wire brushes with loose bristles</li>
        <li>Avoid abrasive cleaners on stainless steel</li>
        <li>Don't spray water on hot ceramic grills</li>
        <li>Never use harsh chemicals that could contaminate food</li>
      </ul>

      <p>With regular cleaning and maintenance, your grill will perform better, last longer, and produce better-tasting food. Make cleaning part of your grilling routine, and it will never feel like a chore.</p>
    `,
  },
  "best-grilling-recipes-for-summer": {
    title: "The Best Grilling Recipes for Summer",
    date: "October 18",
    author: "Jennifer Park",
    image: "/grilled-food-recipes.jpg",
    content: `
      <p>Summer is the perfect time to fire up the grill and enjoy outdoor cooking. Whether you're hosting a backyard barbecue or preparing a weeknight dinner, these tested recipes will help you make the most of grilling season. From classic burgers to innovative vegetable dishes, we've got you covered.</p>

      <h2>Classic Burgers Done Right</h2>
      
      <h3>The Perfect Beef Burger</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>2 lbs ground beef (80/20 blend)</li>
        <li>Salt and freshly ground black pepper</li>
        <li>4 burger buns</li>
        <li>Your favorite toppings</li>
      </ul>
      
      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Form beef into 4 patties, making a slight indentation in the center</li>
        <li>Season generously with salt and pepper just before grilling</li>
        <li>Grill over high heat for 4-5 minutes per side for medium</li>
        <li>Let rest 2 minutes before serving</li>
        <li>Toast buns on grill for 30 seconds</li>
      </ol>

      <p><strong>Pro Tips:</strong></p>
      <ul>
        <li>Don't overwork the meat – handle gently</li>
        <li>Make patties slightly larger than buns (they shrink)</li>
        <li>Only flip once for best crust</li>
        <li>Add cheese in last minute of cooking</li>
      </ul>

      <h2>Grilled Chicken Perfection</h2>

      <h3>Lemon Herb Grilled Chicken</h3>
      <p><strong>Marinade:</strong></p>
      <ul>
        <li>1/4 cup olive oil</li>
        <li>Juice of 2 lemons</li>
        <li>4 cloves garlic, minced</li>
        <li>2 tbsp fresh rosemary, chopped</li>
        <li>2 tbsp fresh thyme</li>
        <li>Salt and pepper to taste</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Combine marinade ingredients</li>
        <li>Marinate chicken breasts for 2-4 hours</li>
        <li>Grill over medium-high heat for 6-7 minutes per side</li>
        <li>Internal temperature should reach 165°F</li>
        <li>Rest 5 minutes before slicing</li>
      </ol>

      <h2>Seafood on the Grill</h2>

      <h3>Grilled Salmon with Dill Butter</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>4 salmon fillets (6 oz each)</li>
        <li>4 tbsp butter, softened</li>
        <li>2 tbsp fresh dill, chopped</li>
        <li>1 lemon, zested and juiced</li>
        <li>Salt and pepper</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Mix butter, dill, lemon zest, and juice</li>
        <li>Season salmon with salt and pepper</li>
        <li>Grill skin-side down over medium heat for 6 minutes</li>
        <li>Flip and cook 4 more minutes</li>
        <li>Top with dill butter and serve</li>
      </ol>

      <h3>Grilled Shrimp Skewers</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>2 lbs large shrimp, peeled and deveined</li>
        <li>3 tbsp olive oil</li>
        <li>3 cloves garlic, minced</li>
        <li>1 tsp paprika</li>
        <li>Juice of 1 lime</li>
        <li>Fresh cilantro</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Toss shrimp with oil, garlic, paprika, and lime</li>
        <li>Thread onto skewers</li>
        <li>Grill over high heat for 2-3 minutes per side</li>
        <li>Garnish with cilantro</li>
      </ol>

      <h2>Vegetable Sides</h2>

      <h3>Grilled Corn with Chili-Lime Butter</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>6 ears of corn, husked</li>
        <li>4 tbsp butter</li>
        <li>1 tsp chili powder</li>
        <li>Zest and juice of 2 limes</li>
        <li>Cotija cheese, crumbled</li>
        <li>Fresh cilantro</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Grill corn over medium-high heat, turning occasionally, 10-12 minutes</li>
        <li>Mix butter, chili powder, lime zest and juice</li>
        <li>Brush corn with chili-lime butter</li>
        <li>Sprinkle with cotija and cilantro</li>
      </ol>

      <h3>Grilled Vegetable Platter</h3>
      <p><strong>Vegetables to grill:</strong></p>
      <ul>
        <li>Zucchini, sliced lengthwise</li>
        <li>Bell peppers, quartered</li>
        <li>Red onions, thick slices</li>
        <li>Asparagus spears</li>
        <li>Portobello mushrooms</li>
        <li>Cherry tomatoes on skewers</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Toss vegetables with olive oil, salt, and pepper</li>
        <li>Grill over medium-high heat until tender and charred</li>
        <li>Cooking times vary: 3-8 minutes per side</li>
        <li>Drizzle with balsamic glaze before serving</li>
      </ol>

      <h2>Ribs and Slow-Cooked Meats</h2>

      <h3>Competition-Style BBQ Ribs</h3>
      <p><strong>Dry Rub:</strong></p>
      <ul>
        <li>1/4 cup brown sugar</li>
        <li>2 tbsp paprika</li>
        <li>1 tbsp black pepper</li>
        <li>1 tbsp salt</li>
        <li>1 tbsp chili powder</li>
        <li>2 tsp garlic powder</li>
        <li>2 tsp onion powder</li>
        <li>1 tsp cayenne</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Remove membrane from back of ribs</li>
        <li>Apply dry rub generously</li>
        <li>Set up grill for indirect heat at 225°F</li>
        <li>Smoke ribs for 3 hours</li>
        <li>Wrap in foil with butter and brown sugar, cook 2 more hours</li>
        <li>Unwrap, brush with BBQ sauce, cook 1 more hour</li>
        <li>Let rest 10 minutes before cutting</li>
      </ol>

      <h2>Grilled Pizza</h2>

      <h3>Margherita Grilled Pizza</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>Pizza dough (store-bought or homemade)</li>
        <li>Olive oil</li>
        <li>1 cup tomato sauce</li>
        <li>Fresh mozzarella, sliced</li>
        <li>Fresh basil leaves</li>
        <li>Parmesan cheese</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Roll dough thin and brush with olive oil</li>
        <li>Grill oiled side over high heat for 2-3 minutes</li>
        <li>Flip, quickly add toppings to grilled side</li>
        <li>Close lid and cook 3-4 minutes until cheese melts</li>
        <li>Top with fresh basil and parmesan</li>
      </ol>

      <h2>Desserts on the Grill</h2>

      <h3>Grilled Peaches with Honey and Mascarpone</h3>
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>4 ripe peaches, halved and pitted</li>
        <li>2 tbsp butter, melted</li>
        <li>Honey for drizzling</li>
        <li>Mascarpone cheese</li>
        <li>Fresh mint</li>
      </ul>

      <p><strong>Instructions:</strong></p>
      <ol>
        <li>Brush peach halves with melted butter</li>
        <li>Grill cut-side down over medium heat for 4-5 minutes</li>
        <li>Flip and grill 2 more minutes</li>
        <li>Serve with dollop of mascarpone and honey drizzle</li>
        <li>Garnish with mint</li>
      </ol>

      <h2>Grilling Tips for Success</h2>

      <h3>Temperature Control</h3>
      <ul>
        <li>High heat (450-550°F): Burgers, steaks, thin cuts</li>
        <li>Medium heat (350-450°F): Chicken, fish, vegetables</li>
        <li>Low heat (225-275°F): Ribs, brisket, slow-cooked meats</li>
      </ul>

      <h3>Timing Guidelines</h3>
      <ul>
        <li>Burgers: 4-5 minutes per side (medium)</li>
        <li>Chicken breasts: 6-7 minutes per side</li>
        <li>Steaks (1-inch): 4-5 minutes per side (medium-rare)</li>
        <li>Fish fillets: 4-5 minutes per side</li>
        <li>Vegetables: 3-8 minutes per side</li>
      </ul>

      <h3>Essential Techniques</h3>
      <ul>
        <li>Preheat grill for 10-15 minutes</li>
        <li>Oil grates before cooking</li>
        <li>Don't move food too soon – let it develop crust</li>
        <li>Use a meat thermometer for accuracy</li>
        <li>Let meat rest before cutting</li>
        <li>Keep lid closed as much as possible</li>
      </ul>

      <h2>Food Safety Tips</h2>

      <ul>
        <li>Keep raw and cooked foods separate</li>
        <li>Use different plates for raw and cooked meat</li>
        <li>Cook to safe internal temperatures</li>
        <li>Don't leave food out more than 2 hours (1 hour if over 90°F)</li>
        <li>Clean grill grates before and after cooking</li>
      </ul>

      <p>These recipes will help you master your grill this summer. Remember, practice makes perfect – don't be afraid to experiment with flavors and techniques. Happy grilling!</p>
    `,
  },
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{article.title}</h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>by {article.author}</span>
              <span>•</span>
              <time>{article.date}</time>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-3xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-2xl prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}
