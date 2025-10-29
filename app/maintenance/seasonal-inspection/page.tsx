import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SeasonalInspectionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/checking-gas-grill-connections-and-burners.jpg"
            alt="Seasonal grill inspection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">Seasonal Inspection</h1>
              <p className="mt-4 text-xl text-white/90">Catch problems early and keep your grill running safely</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Regular seasonal inspections are crucial for grill safety and performance. A thorough check at the
              beginning and end of grilling season helps identify worn parts, potential safety issues, and maintenance
              needs before they become serious problems.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Why Seasonal Inspections Matter</h2>
            <p className="leading-relaxed text-muted-foreground">
              Grills operate under extreme conditions—high heat, grease, weather exposure, and temperature fluctuations
              all take their toll. Small issues like a clogged burner port or worn gas line can lead to poor
              performance, uneven cooking, or even dangerous gas leaks. Regular inspections catch these problems early
              when they're easy and inexpensive to fix.
            </p>

            <div className="my-8 rounded-lg border-2 border-primary bg-primary/5 p-6">
              <h3 className="text-xl font-semibold text-foreground">Inspection Schedule</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>
                  <strong>Spring (Pre-Season):</strong> Comprehensive inspection before heavy use begins
                </li>
                <li>
                  <strong>Mid-Summer:</strong> Quick check of high-wear components
                </li>
                <li>
                  <strong>Fall (Post-Season):</strong> Full inspection and winterization prep
                </li>
                <li>
                  <strong>Before First Use:</strong> If grill has been stored for extended period
                </li>
              </ul>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Gas Grill Inspection Guide</h2>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Gas Connections and Hoses</h3>
            <p className="leading-relaxed text-muted-foreground">
              Gas leaks are the most serious safety concern. Inspect all gas connections, hoses, and fittings carefully
              before each season.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/inspecting-gas-grill-hose-and-connections.jpg"
                alt="Inspecting gas connections"
                fill
                className="object-cover"
              />
            </div>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Visual Inspection</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Check hose for cracks, brittleness, or damage from rodents</li>
              <li>Inspect connections for corrosion or loose fittings</li>
              <li>Look for signs of gas residue or discoloration around connections</li>
              <li>Verify regulator is securely attached and undamaged</li>
              <li>Check that hose isn't kinked or touching hot surfaces</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Leak Test</h4>
            <p className="leading-relaxed text-muted-foreground">
              Perform this test every season and after replacing any gas components:
            </p>
            <ol className="mt-4 space-y-2 text-muted-foreground">
              <li>1. Mix equal parts dish soap and water in spray bottle</li>
              <li>2. Turn on gas supply but keep burners off</li>
              <li>3. Spray soapy water on all connections, hose, and regulator</li>
              <li>4. Watch for bubbles forming—bubbles indicate a leak</li>
              <li>5. If leak detected, turn off gas immediately and tighten or replace component</li>
              <li>6. Retest after any repairs</li>
            </ol>

            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <h4 className="text-xl font-semibold text-foreground">When to Replace Gas Hoses</h4>
              <p className="mt-2 text-muted-foreground">
                Replace gas hoses every 3-5 years regardless of appearance, or immediately if you notice: cracks or
                brittleness, damage from animals, failed leak test, or exposure to extreme heat. Don't risk it—hoses are
                inexpensive compared to the danger of gas leaks.
              </p>
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Burners and Venturi Tubes</h3>
            <p className="leading-relaxed text-muted-foreground">
              Burners are the heart of your gas grill. Clogs, corrosion, and damage affect heat distribution and cooking
              performance.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/cleaning-gas-grill-burner-tubes.jpg"
                alt="Inspecting burner tubes"
                fill
                className="object-cover"
              />
            </div>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Burner Inspection</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Remove burners and check for rust, corrosion, or holes</li>
              <li>Inspect burner ports (holes) for clogs from grease or insects</li>
              <li>Clear clogged ports with wire, toothpick, or compressed air</li>
              <li>Check that burner sits properly in mounting brackets</li>
              <li>Look for warping or damage from excessive heat</li>
              <li>Test flame pattern after reinstalling—should be even and blue</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Venturi Tube Check</h4>
            <p className="leading-relaxed text-muted-foreground">
              Venturi tubes mix air with gas for proper combustion. Spiders and insects love to nest here, causing
              dangerous flashbacks.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Remove burners to access venturi tubes</li>
              <li>Look inside tubes for spider webs, nests, or debris</li>
              <li>Clean thoroughly with pipe cleaner or venturi brush</li>
              <li>Check air shutters are properly adjusted and not blocked</li>
              <li>Verify tubes align properly with gas valves</li>
            </ul>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/spider-web-in-grill-venturi-tube.jpg"
                alt="Spider web in venturi tube"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Ignition System</h3>
            <p className="leading-relaxed text-muted-foreground">
              A reliable ignition system is essential for safe, convenient grilling. Test and maintain it regularly.
            </p>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Electronic Ignition</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Test each burner's igniter—should produce strong, visible spark</li>
              <li>Clean igniter electrode with rubbing alcohol and soft cloth</li>
              <li>Check electrode gap (usually 1/8 to 3/16 inch from burner)</li>
              <li>Replace battery if spark is weak (battery-powered models)</li>
              <li>Inspect wiring for damage or corrosion (piezo models)</li>
              <li>Replace igniter module if consistently failing</li>
            </ul>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Heat Distribution Components</h3>
            <p className="leading-relaxed text-muted-foreground">
              Flavorizer bars, heat tents, and ceramic briquettes protect burners and distribute heat. These take a
              beating and need regular replacement.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/worn-flavorizer-bars-needing-replacement.jpg"
                alt="Worn heat distribution components"
                fill
                className="object-cover"
              />
            </div>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Check for excessive rust, holes, or warping</li>
              <li>Look for grease buildup that could cause flare-ups</li>
              <li>Verify components sit properly and cover burners completely</li>
              <li>Replace if more than 25% deteriorated</li>
              <li>Clean thoroughly during deep cleaning sessions</li>
            </ul>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Charcoal Grill Inspection</h2>
            <p className="leading-relaxed text-muted-foreground">
              While simpler than gas grills, charcoal grills still need regular inspection to ensure safety and
              performance.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/inspecting-charcoal-grill-components.jpg"
                alt="Charcoal grill inspection"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Charcoal Grill Checklist</h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Firebox and Bowl</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Check for rust holes or cracks in bowl</li>
                  <li>• Inspect welds and joints for separation</li>
                  <li>• Look for warping from excessive heat</li>
                  <li>• Clean out ash and debris completely</li>
                  <li>• Check ash catcher for damage or rust</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Grates and Cooking Surface</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Inspect grates for excessive rust or damage</li>
                  <li>• Check that grates sit level and secure</li>
                  <li>• Look for broken or missing grate sections</li>
                  <li>• Verify hinged grates operate smoothly</li>
                  <li>• Season cast iron grates if needed</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Vents and Dampers</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Test that vents open and close smoothly</li>
                  <li>• Clean ash and debris from vent mechanisms</li>
                  <li>• Check for rust or damage preventing proper operation</li>
                  <li>• Lubricate moving parts if needed</li>
                  <li>• Verify vent covers are secure</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="text-xl font-semibold text-foreground">Lid and Gaskets</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Check lid for warping or damage</li>
                  <li>• Inspect gaskets for deterioration (kamado grills)</li>
                  <li>• Test lid fit—should seal properly</li>
                  <li>• Verify thermometer accuracy with separate gauge</li>
                  <li>• Check hinges and handles for tightness</li>
                </ul>
              </div>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Pellet Grill Inspection</h2>
            <p className="leading-relaxed text-muted-foreground">
              Pellet grills combine mechanical, electrical, and combustion systems that all need attention.
            </p>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/pellet-grill-auger-and-fire-pot-inspection.jpg"
                alt="Pellet grill inspection"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Pellet Grill Specific Checks</h3>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Auger System</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Clean auger tube of sawdust and debris</li>
              <li>Check auger motor operation—should run smoothly</li>
              <li>Inspect auger for damage or jamming</li>
              <li>Verify pellets feed consistently without bridging</li>
              <li>Lubricate auger motor if manufacturer recommends</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Fire Pot and Igniter</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Remove and clean fire pot thoroughly</li>
              <li>Check igniter rod for damage or excessive buildup</li>
              <li>Test igniter—should glow red hot</li>
              <li>Inspect fire pot for cracks or warping</li>
              <li>Clear any ash or debris from igniter area</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold text-foreground">Temperature Control</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Test temperature probe accuracy with separate thermometer</li>
              <li>Check that controller maintains set temperature</li>
              <li>Inspect fan operation—should run at varying speeds</li>
              <li>Clean temperature probe of grease and buildup</li>
              <li>Update controller firmware if available</li>
            </ul>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Universal Inspection Points</h2>
            <p className="leading-relaxed text-muted-foreground">
              These checks apply to all grill types and are essential for safety and longevity.
            </p>

            <h3 className="mt-8 text-2xl font-semibold text-foreground">Structural Components</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Legs and Wheels</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Check stability, tighten loose bolts, lubricate wheels, inspect for rust or damage, verify locking
                  mechanisms work properly.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Side Tables and Shelves</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Test stability, tighten mounting hardware, check for warping or damage, clean and protect surfaces,
                  verify folding mechanisms operate smoothly.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Handles and Knobs</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ensure secure attachment, check for heat damage or melting, test operation of control knobs, replace
                  worn or damaged components, clean thoroughly.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground">Grease Management</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Empty and clean grease trap, check drip pan for rust or holes, verify grease channels aren't clogged,
                  inspect for grease buildup in hidden areas, replace disposable components.
                </p>
              </div>
            </div>

            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/checking-grill-structural-components.jpg"
                alt="Structural inspection"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Safety Inspection Checklist</h2>
            <p className="leading-relaxed text-muted-foreground">
              Safety should always be your top priority. These items require immediate attention if issues are found.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-foreground">Gas Leaks</h4>
                  <p className="text-sm text-muted-foreground">
                    Never use grill if gas leak is detected. Replace faulty components immediately. If you smell gas,
                    turn off supply and don't attempt to light.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-foreground">Structural Instability</h4>
                  <p className="text-sm text-muted-foreground">
                    Wobbly or unstable grills are dangerous. Tighten all connections or replace damaged legs/wheels
                    before use.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-foreground">Excessive Rust</h4>
                  <p className="text-sm text-muted-foreground">
                    Rust holes in firebox, burners, or structural components compromise safety. Replace affected parts
                    or consider new grill if damage is extensive.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border-2 border-primary bg-primary/5 p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-foreground">Grease Buildup</h4>
                  <p className="text-sm text-muted-foreground">
                    Excessive grease is a fire hazard. Clean thoroughly before use if significant buildup is present.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">Replacement Parts Planning</h2>
            <p className="leading-relaxed text-muted-foreground">
              Seasonal inspections help you plan for replacement parts before you need them urgently. Keep commonly
              needed parts on hand.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold text-foreground">Gas Grill Spares</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Extra gas hose</li>
                  <li>• Igniter battery or module</li>
                  <li>• Burner set</li>
                  <li>• Flavorizer bars/heat tents</li>
                  <li>• Grill brush</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold text-foreground">Pellet Grill Spares</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Igniter rod</li>
                  <li>• Temperature probe</li>
                  <li>• Fire pot</li>
                  <li>• Auger motor (if available)</li>
                  <li>• Gaskets and seals</li>
                </ul>
              </div>
            </div>

            <div className="my-12 rounded-lg border-2 border-primary bg-primary/5 p-8">
              <h3 className="text-2xl font-semibold text-foreground">Seasonal Inspection Schedule</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Spring Pre-Season (March-April)</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete inspection of all components, deep cleaning, test all systems, replace worn parts, check
                    gas connections, verify ignition, season grates.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Mid-Season Check (July)</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick inspection of high-wear items, clean burners and grates, check gas connections, empty grease
                    trap, verify even heating.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Fall Post-Season (October-November)</h4>
                  <p className="text-sm text-muted-foreground">
                    Full inspection and winterization, deep clean all components, check for damage from season's use,
                    plan replacement parts, prepare for storage.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Regular seasonal inspections are your best defense against unexpected failures, safety hazards, and
              expensive repairs. Taking an hour or two each season to thoroughly inspect your grill ensures it will
              perform reliably and safely for years to come. Don't skip this important maintenance—your safety and your
              grill's longevity depend on it.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
