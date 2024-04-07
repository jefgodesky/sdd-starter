# The SDD Starter

[![Tests](https://img.shields.io/github/actions/workflow/status/jefgodesky/sdd-starter/test.yml)](https://github.com/jefgodesky/sdd-starter/actions/workflows/test.yml)
[![License](https://badgen.net/github/license/jefgodesky/design-tokenizer)](https://github.com/jefgodesky/design-tokenizer/blob/master/LICENSE)
[![TS-Standard - TypeScript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)

[System-driven design](https://uxdesign.cc/embracing-change-with-system-driven-design-55668dc6c88e)
uses a design system to design web interfaces in
a process similar to the way that programmers
use unit tests to write great code with
test-driven development (TDD). The rules for
system-driven design are:

* **Start with a working prototype in HTML**, not
  a mockup in an image editor like Figma. Load the
  CSS and JavaScript from the design system and
  start adding the actual markup that will deliver
  the experience that you&rsquo;re designing.
* **Make the system that will make the
  experience.** When you reach a point where the
  design system can&rsquo;t do what you want it
  to, think about why that is. Is the system
  actually stopping you from making a bad design
  decision, or is this a gap in the system? If
  it&rsquo;s a gap, is the problem you&rsquo;re
  running into unique, or is it just the first
  instance you&rsquo;ve encountered of a more
  general problem? Don&rsquo;t worry about
  solving the specific problem in front of you;
  instead, think about how the system could be
  changed to deliver the sort of thing 
  you&rsquo;re looking for effortlessly.

Of course, this approach requires you to have a
really good design system to begin with, and most
of the options you&rsquo;ll find are riddled with
the sort of [excessive complexity](https://www.smashingmagazine.com/2024/02/web-development-getting-too-complex/)
that has [plagued frontend development](https://infrequently.org/2023/02/the-market-for-lemons/)
over the past decade.

That&rsquo;s where this template comes into play.

* It&rsquo;s built on the simplicity of web
  standards and separation of concerns that gave us
  the [CSS Zen Garden](https://csszengarden.com/).
* It uses [a tiny collection of a few useful methods](https://github.com/jefgodesky/unobtrusive-dom)
  to make DOM manipulations easy, with a few
  standard JavaScript enhancements to establish
  use patterns that you can easily repeat.
* By emphasizing semantic HTML, this template
  starts you off with world-class accessibility
  and SEO. It also means that your users can get
  more out of your website by making it easier
  for browser plugins to make your website even 
  more useful for your users.
* The template begins with a collection of basic
  components found in nearly all design systems,
  so you can skip the basics and get straight to
  work on the pieces that make _your_ design
  system unique.
* _All_ of the JavaScript enhancements in the
  template total to just 142 KB — just 18 KB
  bigger than a fully optimized Webpack build of
  the core React library on its own. But this
  template also uses code splitting so that you
  only load the code you need, so on many pages
  you might be loading just **18 KB** of
  JavaScript — _before_ optimization efforts.
* It&rsquo;s all driven by design tokens (written
  in accordance with the
  [W3C Design Tokens Format Module](https://design-tokens.github.io/community-group/format/)
  so you can use the file with other tools like
  Figma, Sketch, or UXPin), so it&rsquo;s easy
  to make design decisions about color,
  typography, spacing, and more and see those
  decisions immediately reflected throughout the
  design system and all the products that _use_
  your design system.

## Getting started

The first step is to create your design system.
Click the green **Use this template** button
above to create your own copy of this repository.

You will need to have [Node.js](https://nodejs.org/en)
running on your computer. Walking you through
that process is a bit beyond this document, but
you can find [installation instructions](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
on the [Node.js website](https://nodejs.org/en).

You&rsquo;ll then have to download and set up
a local copy with the following commands:

```bash
git clone https://github.com/yourname/your-design-system.git
cd your-design-system
npm install
```

`yourname` and `your-design-system` are
placeholders; make sure to replace them with the
actual location of the actual Github repository
you created when you made it from the template.

Next, it’s time to name your design system. Run:

```bash
npm run rename
```

This utility will ask you for the **full name**
of your design system (e.g., **My Awesome
Design System**) as well as a a **short name**
(maybe you abbreviate that as **MADS**, but if
you want it to be **My Awesome Design System**
every time it’s referred to, just type that in
for the short name just like you did for the
full name). The utility will then update all of
the documentation to use your design system’s
new name.

You should probably commit the changes that the
rename utility made at this point.

At this point, you’re ready to run your design
system locally. Run:

```bash
npm run dev
```

When you create a new design system with the
SDD Starter, it will be painfully generic. It is,
after all, a template. You can start changing
the appearance pretty radically by changing
the `tokens.json` file to change the colors,
typefaces, spacing, and other critical design
decisions that really make it look like
something.

## Design Tokens

`tokens.json` contains your design tokens,
following the [W3C Design Tokens Format Module](https://design-tokens.github.io/community-group/format/).
You will see that most tokens have an extension
like this:

```json
"$extensions": {
  "com.npmjs.package.design-tokenizer": {
    "scss": {
      "file": "stylesheets/modules/_breakpoints.scss",
      "module": "breakpoints",
      "variable": "desktop"
    }
  }
}
```

This is used by the [Design Tokenizer](https://github.com/jefgodesky/design-tokenizer)
package to turn your tokens into Sass variables
(_see_ **Changing Styles**, below). The example
above will be exported into `stylesheets/modules/_breakpoints.scss`,
so if you import it with `@use`, you’ll be able
to use it in your Sass as `breakpoints.$desktop`.

In the SDD Starter, the tokens are _mostly_ used
as SCSS variables, but the benefit of design
tokens is that they’re so reusable. The same
tokens can be used by client-side JavaScript
enhancements or exported for use in mobile
applications.

### Breakpoints

There’s a common bad habit in [responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
to work from a few breakpoints that are defined
in terms of device widths (e.g., mobile, tablet,
desktop, etc.), but this misses much of the point
of responsive design. In [the article](https://alistapart.com/article/responsive-web-design/)
on _[A List Apart](https://alistapart.com/)_ where
he originally introduced the concept,
[Ethan Marcotte](https://ethanmarcotte.com/)
emphasized [John Allsopp’s](https://johnfallsopp.com/)
“[Dao of Web Design](https://alistapart.com/article/dao/),”
“the ebb and flow of things,” and responsive
architecture — in short, responding to the
environment in a dynamic way. When we use a few,
fixed breakpoints, we’re not _responding_ in any
meaningful way, we’re just “aiming for Eternity”
_x_ times instead of once. True responsiveness
means using breakpoints that are specific to
the component. You switch from one style to
another because you reach the point where the
first style no longer works. This involves taking
more time to consider all of the varied
environments that your component might appear in,
but it has the advantage that your components
look great in every possible environment, and
when a new device hits the market, your components
will look great there, too, even before you’ve
had a chance to change anything. It makes you
[future friendly](https://bradfrost.com/blog/post/future-friendly/).

The components in the SDD Starter are designed
[mobile first](https://www.interaction-design.org/literature/topics/mobile-first),
meaning that the default styles work for the
smallest screens, and we then use media queries
and breakpoints to respond to larger screens.
This is another example of progressive enhancement
that treats larger screens as enhancements that
some users might have.

For the core components included in the SDD
Starter, we didn’t need any complex breakpoints,
so the only token currently in the breakpoints
section is the generic `desktop` breakpoint. As
you add more components, you’ll undoubtedly find
that you’ll need more. When you do, don’t add
more device-specific breakpoints, but instead
add breakpoints that are specific to your
components. For example, rather than a `tablet`
breakpoint, you might add `cards-3` for the
breakpoint where your card list component should
show three cards in a row and `cards-4` for the 
breakpoint where it should show four cards in a
row. These values wouldn’t come from the width of
a device, but from the dimensions of your cards
and how big an environment would have to be to
accommodate three or four cards comfortably.

### Colors

The colors section is quite extensive, modeling
the way in which you can define basic colors but
also reuse them effectively in themes.

The `base` section includes a number of basic
color definitions that are never used in the
Sass files directly. Rather, the colors in the
other two sections — `light` and `dark`, the two
color themes that come with the SDD Starter —
_refer_ to the base colors.

For example, the error color, the link hover
color, and the link active color in the light
theme all refer to the base `red` color. If you
change the base `red` color, that will change
all three instances. The Sass files use the more
specific variables, which all refer to what the
color _means_ (the error color, the link hover
color, and the link active color), which gives
you the option to easily change them, but the
base colors define what the color _is_, which
means that you can change the color and see it
reflected everywhere that color is used.

### Typography

The typography section includes three groups
of tokens:

* **Families**, or what you might call _fonts_.
  There’s only one in the SDD Starter, the
  `body` font, [Helvetica](https://fontsinuse.com/typefaces/44/helvetica).
  These family tokens include a colophon
  extension with information about the fonts
  used in the font stack, so they can be
  referenced in the documentation. You can see
  this used in the SDD Starter on the
  Typography page. When you add new families to
  your design system, name them by function,
  rather than font. For example, the token that
  exists there now is `body`, not `helvetica`.
  You might replace that with a different font
  and add other families like `heading`,
  `techical`, or `supplemental`.
* **Sizes** defines the sizes in your
  [typographic scale](https://alistapart.com/article/more-meaningful-typography/).
  The SDD Starter uses typography as the basis of
  its design, so the sizes for `xs` through `xxxl`
  are used extensively. If you remove these
  tokens, you’ll have to fix a lot of Sass files
  that rely on them, but you can also set a new,
  harmonious scale quickly by setting the values
  of these tokens to appropriate values on your
  scale.
* **Styles** bring families, sizes, and other
  decisions like weight and style together into
  something that can be used in a CSS font
  declaration. Here is where you’ll find tokens
  for specific typographic styles like primary
  headings (`h1`), body text (`body`), fine
  print (`fine-print`), or pull quotes (`pull-quote`).

### Spacing

The spacing tokens add some more spacing variables
beyond those already defined in typography. If
you’re changing the typographic sizes, you should
compose these values to the same typographic
scale to maintain a pleasing visual harmony
throughout your design system.

You’ll note that the first several spacing
tokens are fairly generic, like `horizontal`
and `vertical`. These are general tokens that
are used widely throughout the system. But
there’s also a very specific token for
`code-block-max-height`. This is a common pattern
you’ll find throughout the design tokens, and one
you should use yourself. Where we can make a more
general token, that’s great, but tokens are also
a great place to store the “magic numbers” in our
design decisions, so that we know _why_ we chose
them and we can easily change them in the future
if we need to.

### Borders

Border tokens define the borders around elements
(even though elements that only use them on a
single side). They are broken up into the same
color themes as the color tokens (`light` and
`dark` in the SDD Starter), and include both
general-use tokens (like `hairline`) and very
component-specific tokens (like `th`).

### Numbers

In the SDD Starter, we have just one value in
this section — `default-px-per-rem` — which is
actually used by one of our client-side JavaScript
enhancements. You may find more uses for this
section as you add your own components, though.
Design tokens are a great place to store the
“magic numbers” in our design decisions, so that
we know _why_ we chose them and we can easily
change them in the future if we need to.

### Transitions

The last section of tokens in the SDD Starter are
transitions, which define a duration, a delay,
and a cubic Bézier timing function.

### Other Sections

We didn’t need them for the core components in
the SDD Starter, but you may find that you want
to add new sections, like:

* Strokes
* Shadows
* Gradients

The more of your design decisions that you can
pull out of your Sass/CSS and into your design
tokens, the more those decisions can be exported
and reused in other contexts and for other
purposes.


## Changing Styles

The SDD Starter uses [Sass](https://sass-lang.com/)
(OK, SCSS if you want to be specific).
You will find these files in the `/stylesheets`
directory.

* `/stylesheets/components` is where most of the
  styles are found. These are organized by
  component, with styles relevant to each
  component found in its corresponding stylesheet
  (e.g., all of the styles associated with the
  button component are in `/stylesheets/components/_buttons.scss`).
* `/stylesheets/modules` contains files that are
  important for Sass, but don’t correlate
  one-to-one with any of the actual CSS that it
  produces. This includes the files containing
  Sass variables that are produced from your
  design tokens file, as well as files like
  `_mixins.scss` (which include your mixins) and
  `_themes.scss` (which handle your color themes).
* `/stylesheets/partials` contains a few files
  that _do_ produce actual CSS but don’t quite
  fit in any component, like your CSS reset and
  some basic typographic styles. Be careful adding
  new files to this directory, or even adding to
  the files that are already here; the more there
  is in this directory, the less effective your
  design system will be as a design system. If
  you’re tempted to put something in here, ask
  yourself if there isn’t any way you could fit
  it into a component instead.
* `/stylesheets/vendor` contains CSS from
  third-party vendors. Right now that’s just
  `prism.scss`, the styling from [Prism](https://prismjs.com/)
  that styles the code blocks in the design
  system documentation, but if you want to add
  more third-party styles in the future, this will
  provide you with a good place to put them.

### Layout & Breakout

The `%layout` placeholder gives an element the
padding and margins of a page-level block
element. For example.

The `%breakout` placeholder assumes that it’s
_within_ some ancestor that has the `%layout`
style. It breaks out of its ancestors’ confines
to spread across the entire page, but then pads
itself so that its contents will still align
with the other content on the page.

So, for example, if you want to create a page
that has one section with a custom background
that stretches across the entire page, you would
apply the `%layout` style to the main content and
the `%breakout` style to the section with the
custom background.

### Color Themes

The SDD Starter comes with two color themes:
`light` and `dark`. You will find the color and
border tokens separated along these lines.
`/stylesheets/modules/_themes.scss` maps these
variables so that the `set-style` mixin in
`/stylesheets/modules/_mixins.scss` can easily
set the appropriate values. You can see this
mixin in use in `/stylesheets/index.scss`:

```scss
@use "modules/mixins";
@include mixins.set-style("color", "fg");
```

First you specify the property that you want
to set (in this case it’s `color`, but you can
set this to any CSS property; in `index.scss`,
this is immediately preceded by one that calls
`background-color`), and then the element of
the theme map that you want to use. Note that
this doesn’t specify which theme to use — that’s
what the mixin handles — but it instead makes
sure that the `color` is set to `$light-fg` in the
`light` theme and `$dark-fg` in the `dark` theme.

You can change the colors in each theme just by
changing the color tokens, and you can add more
colors to each theme by adding them to the theme
maps in `/stylesheets/modules/_themes.scss`
(remember to add the new color to _both_ themes),
but if you want to do something more complicated
like add another theme, or use red, green, and
blue themes instead of light and dark themes,
you’ll need to consider how you’d change the
logic for choosing which theme to use. You’ll
find much of this in the `color-theme-picker`
JavaScript enhancement, but you’ll need to
change the tokens, theme map, and `set-style`
mixin to reflect your changes.

## Writing New JavaScript Enhancements

The SDD Starter starts you off with Typescript
and ES6. You’ll find two types of JavaScript in
your new design system:

* `/lib` contains scripts that help manage the
  design system itself (like the rename utility).
* `/scripts` contains the scripts that are
  bundled and served to users for client-side
  enhancements.

### Progressive Enhancement

The template starts you off with a solid
foundation in [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement).
This isn’t any more _difficult_ than the
approaches to JavaScript that you might be used
to, but it might require a bit of adjustment in
how you _think_ about JavaScript. The reward is
code that always works, everywhere, for everyone,
on every device, _no matter what_.

If you open your design system and turn off
JavaScript (emulating what your website will
look like [about 3% of the time](https://medium.com/@jason.godesky/when-javascript-fails-52eef47e90db)),
you might not notice much of a difference. That’s
the goal. We can make really great client-side
enhancements with JavaScript, but instead of
starting with that and serving _nothing_ if
anything goes wrong, we start by thinking about
what the base, un-enhanced experience should be,
and then write JavaScript as an enhancement that
most of our users will get. Instead of something
great that’s sometimes useless, we make something
good that’s almost always great.

You can see an example of this in the color theme
picker (in `/scripts/color-theme-picker`).
Instead of placing the SVG in the HTML, the
script adds the SVG to the page. Since it’s only
useful if JavaScript has loaded, we let JavaScript
add it to the page. That way, if something happens
that keeps JavaScript from loading, we don’t have
an SVG on the page that doesn’t do anything.

### Code Style

The existing JavaScript in the template is all
written in Typescript, using ECMAScript 6 (ES6),
ECMAScript modules (ESM), and [Standard JS](https://standardjs.com/)
style.

To lint your code, run:

```bash
npm run lint
```

The template is set up with a pre-commit hook
that will run the Standard JS linter and the
unit tests each time you commit. If either fails,
you won’t be able to commit. Run the linter and
the unit tests to find out what’s stopping you
from committing. Once you fix those problems,
you’ll be able to commit. This step really helps
you avoid making embarrassing, broken commits.

### Test-Driven Development

The existing JavaScript in the template was all
developed with [test-driven development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
(TDD), setting you up well to keep that going.
Since the majority of JavaScript here is
front-end code, we use [Jest](https://jestjs.io/)
for our unit tests.

To run your unit tests, run:

```bash
npm test
```

Test-driven development has four rules:

1. Before you write any code, write a test.
2. When you have a failing test, you can write
   _just enough_ functional code to make that
   test pass.
3. When all of your tests are passing, start
   refactoring. How can you make your code
   simpler, cleaner, or just all-around better?
4. When you’re satisfied with the code, go back
   to step 1.

There are [some enormous benefits to TDD](https://youtu.be/ln4WnxX-wrw?si=uJxNtz74R6ni_t95),
but rather than go over them here, let’s focus
on how you can maintain the standards of TDD that
the SDD Starter sets you up with when you’re
making your own Javascript enhancements.

If you take a look at the existing enhancements
in the `/scripts` folder, you’ll likely notice
that they break their functionality down into
many, tiny functions, each in its own file. This
helps make the code more testable. If you can
think of the smaller parts of your enhancement,
you might start there — first writing a `.spec.ts`
file for the first test you want that method to
pass, and then writing the file with that method
to make that test pass.

### Code Splitting

The JavaScript enhancements in the SDD Starter
use _code splitting_ to drastically improve
client-side performance. JavaScript enhancements
are very useful when they’re needed, but most
pages won’t use most of our enhancements. Code
splitting allows the system to only load the
enhancements that are actually used on the page.

To achieve this, each enhancement has an
`index.ts` file that defines an initialization
method. These initialization methods take an
array of elements from the HTML that call for an
enhancement, and sets up whatever changes are
necessary to initialize those enhancements on
the page.

For example, take a look at the character count
enhancement in `/scripts/character-count`. This
enhances text areas that have a maximum length,
adding a dynamic character counter that lets
users know how many characters they can use,
how many they’ve used so far, and how many they
have left. Obviously, though, this isn’t needed
on a page that doesn’t have any text areas, so
its initialization method (`initCharacterCount`)
takes an array of text area elements and, for
each one, adds the counter text and sets up the
event listeners it needs to keep that information
up to date.

This all comes together in `/scripts/index.ts`,
which you can think of as the “traffic cop” of
your front-end enhancements. It will look for
the elements that should be enhanced and then
load the enhancements that are needed if it
finds any on the page. That means, to connect
your new enhancement, you need to tell this
file about it. You do that by adding it to the
`modules` array.

You’ll note that all of the elements in this
array have an `elems` property, which passes
a selector to the `selector` method to find a
set of elements on the page that could use some
enhancement, and a `name` property, which names
one of the enhancements in the `/scripts`
directory.

### Step by Step

So, bringing it all together, to create a new
front-end enhancement for your design system:

1. Create a new directory in the `/scripts`
   directory. Give it a good, descriptive name.
2. Think of the smallest chunks of functionality
   this will involve. Create files for each of
   them; first a `.spec.ts` file for your tests,
   and then a `.ts` file for your method.
   1. Before you write any code, write a test.
   2. When you have a failing test, you can write
      _just enough_ functional code to make that
      test pass.
   3. When all of your tests are passing, start
      refactoring. How can you make your code
      simpler, cleaner, or just all-around better?
   4. When you’re satisfied with the code, go back
      to step 1.
3. Bring it all together with an initialization
   method in `index.ts` (but first, tests in
   `index.spec.ts`; you don’t need to repeat what
   was already tested in other unit tests, but
   you _should_ still follow the rules of TDD
   for the unique things that your initialization
   method is doing).
4. Tell `/script/index.ts` about your enhancement
   by adding a new element to the `modules` array.
   1. The `elems` element should use the `selector`
      method with a selector that will select
      the elements on the page that you’d like
      to enhance. This might be direct, like the
      text areas in the `character-count`
      enhancement, or just a target to put the
      enhancement in, as with the
      `color-theme-picker` enhancement.
   2. The `name` element is the name of the
      directory you created in step 1.

## Contributing

If there’s something about the SDD Starter that
you feel could be improved, please
[tell us about it](https://github.com/jefgodesky/sdd-starter/issues/new)!
If you’re feeling motivated to contribute
something directly to the Starter, we’d love to
have it and add you to our list of contributors!
To do so:

* Create a local copy of the SDD Starter. This is
  _almost_ the same as detailed in the
  **Getting Started** instructions above, except
  instead of hitting the **Use this template**
  button and cloning the new repository that
  creates, you clone `https://github.com/jefgodesky/sdd-starter.git`
  directly.
* Create a new branch. Give it a name that
  describes the change you’re making.
* Make your changes! Note that the linter and
  unit tests will have to pass before you’ll be
  able to commit your changes.
* Push the branch to GitHub and
  [make a pull request](https://github.com/jefgodesky/sdd-starter/compare).

We might have some back-and-forth to get it just
right, but once your code is merged in, you’ll
be added to the list of contributors.
