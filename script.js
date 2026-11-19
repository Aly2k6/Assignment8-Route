// Assignment 8: each recipe is an OBJECT. All recipes are stored in an ARRAY.
// To add another recipe, copy one object and change its information.
const recipes = [
  {
    id: "chicken-pasta", name: "Chicken Pasta", emoji: "🍝", image: "images/chicken-pasta.jpg",
    category: "Italian", difficulty: "Easy", description: "Creamy chicken pasta with garlic",
    prepTime: 15, cookTime: 25, servings: 2, rating: 4.8, reviews: 234,
    ingredients: ["200g pasta", "250g chicken breast", "1 cup cooking cream", "2 cloves garlic", "2 tablespoons olive oil", "Salt and pepper"],
    instructions: ["Boil pasta following the package instructions.", "Cut chicken into small pieces.", "Heat olive oil in a pan and cook chicken thoroughly.", "Add garlic and cooking cream, stirring gently.", "Mix the cooked pasta into the sauce.", "Season with salt and pepper, then serve."],
    nutrition: { calories: 550, protein: "35g", carbs: "60g", fat: "20g", fiber: "3g", sodium: "560mg" },
    tips: ["Use fresh garlic for better flavor.", "Do not overcook the pasta.", "Add parmesan cheese before serving."]
  },
  {
    id: "beef-burger", name: "Beef Burger", emoji: "🍔", image: "images/beef-burger.jpg",
    category: "American", difficulty: "Easy", description: "Juicy homemade beef burger with fresh toppings",
    prepTime: 15, cookTime: 20, servings: 2, rating: 4.7, reviews: 198,
    ingredients: ["300g ground beef", "2 burger buns", "2 cheese slices", "2 lettuce leaves", "1 tomato, sliced", "1 small onion", "Salt, pepper and burger sauce"],
    instructions: ["Shape the ground beef into two patties.", "Season both sides with salt and pepper.", "Cook patties thoroughly in a heated pan.", "Add cheese just before finishing.", "Toast the buns and add sauce.", "Assemble with lettuce, tomato, onion and burger patties."],
    nutrition: { calories: 620, protein: "38g", carbs: "42g", fat: "32g", fiber: "3g", sodium: "780mg" },
    tips: ["Do not press the patties while cooking.", "Toast buns for a better texture.", "Add pickles if you like a tangy flavor."]
  },
  {
    id: "chicken-shawarma", name: "Chicken Shawarma", emoji: "🌯", image: "images/chicken-shawarma.jpg",
    category: "Middle Eastern", difficulty: "Medium", description: "Spiced chicken wrapped in warm flatbread",
    prepTime: 25, cookTime: 30, servings: 4, rating: 4.9, reviews: 326,
    ingredients: ["500g chicken breast", "4 flatbreads", "1/2 cup plain yogurt", "2 tablespoons lemon juice", "2 cloves garlic", "1 teaspoon paprika", "1 teaspoon cumin", "Sliced tomato, cucumber and lettuce"],
    instructions: ["Slice chicken into thin strips.", "Mix yogurt, lemon, garlic, paprika and cumin.", "Coat chicken in the mixture and let it rest briefly.", "Cook chicken completely in a hot pan.", "Warm the flatbreads.", "Fill with chicken and vegetables, then wrap."],
    nutrition: { calories: 490, protein: "39g", carbs: "44g", fat: "17g", fiber: "4g", sodium: "610mg" },
    tips: ["Yogurt helps the chicken stay tender.", "Cook in small batches for good browning.", "Serve with a garlic yogurt dip."]
  },
  {
    id: "margherita-pizza", name: "Margherita Pizza", emoji: "🍕", image: "images/margherita-pizza.jpg",
    category: "Italian", difficulty: "Easy", description: "Classic pizza with mozzarella, tomato and basil",
    prepTime: 20, cookTime: 20, servings: 2, rating: 4.7, reviews: 215,
    ingredients: ["1 ready-made pizza base", "1/2 cup tomato sauce", "150g mozzarella", "Fresh basil leaves", "1 tablespoon olive oil", "A pinch of salt and oregano"],
    instructions: ["Preheat the oven to 220°C.", "Spread tomato sauce over the pizza base.", "Add sliced mozzarella and a little oregano.", "Bake until the crust is golden and the cheese melts.", "Top with fresh basil and olive oil before serving."],
    nutrition: { calories: 510, protein: "22g", carbs: "59g", fat: "22g", fiber: "3g", sodium: "760mg" },
    tips: ["Do not overload the pizza with sauce.", "Use fresh mozzarella when possible.", "Add basil after baking to keep its flavor."]
  },
  {
    id: "vegetable-stir-fry", name: "Vegetable Stir Fry", emoji: "🥦", image: "images/vegetable-stir-fry.jpg",
    category: "Asian", difficulty: "Easy", description: "Colorful vegetables in a tasty ginger-soy sauce",
    prepTime: 15, cookTime: 15, servings: 2, rating: 4.5, reviews: 154,
    ingredients: ["1 broccoli head", "1 carrot", "1 bell pepper", "1 zucchini", "2 tablespoons soy sauce", "1 teaspoon grated ginger", "1 tablespoon sesame oil", "Cooked rice for serving"],
    instructions: ["Wash and cut all vegetables into small pieces.", "Heat sesame oil in a large pan.", "Cook the harder vegetables first.", "Add the remaining vegetables and stir frequently.", "Add ginger and soy sauce.", "Serve with cooked rice."],
    nutrition: { calories: 320, protein: "9g", carbs: "50g", fat: "10g", fiber: "8g", sodium: "680mg" },
    tips: ["Keep vegetables slightly crisp.", "Cut vegetables evenly so they cook together.", "Add sesame seeds on top if you have them."]
  },
  {
    id: "grilled-salmon", name: "Grilled Salmon", emoji: "🐟", image: "images/grilled-salmon.jpg",
    category: "Seafood", difficulty: "Easy", description: "Tender salmon with fresh lemon and herbs",
    prepTime: 15, cookTime: 20, servings: 2, rating: 4.8, reviews: 291,
    ingredients: ["2 salmon fillets", "1 lemon", "2 tablespoons olive oil", "1 clove garlic", "Fresh parsley", "Salt and black pepper", "Steamed vegetables for serving"],
    instructions: ["Pat salmon fillets dry and season them.", "Mix olive oil, garlic and lemon juice.", "Brush the mixture over the salmon.", "Grill until the salmon is opaque and cooked through.", "Serve with parsley, lemon and vegetables."],
    nutrition: { calories: 460, protein: "42g", carbs: "8g", fat: "29g", fiber: "2g", sodium: "420mg" },
    tips: ["Avoid moving the fish too much while grilling.", "A little lemon zest adds fresh flavor.", "Serve immediately for the best texture."]
  },
  // Five NEW recipes below — edit, remove or add more whenever you want.
  {
    id: "beef-tacos", name: "Beef Tacos", emoji: "🌮", image: "images/beef-tacos.jpg",
    category: "Mexican", difficulty: "Easy", description: "Flavorful tacos with seasoned beef and fresh toppings",
    prepTime: 15, cookTime: 20, servings: 4, rating: 4.6, reviews: 278,
    ingredients: ["500g ground beef", "8 taco shells", "1 onion, diced", "2 tablespoons taco seasoning", "Shredded lettuce", "Diced tomatoes", "Shredded cheddar cheese", "Sour cream", "Salsa"],
    instructions: ["Chop the onion and prepare the toppings.", "Cook ground beef and onion in a pan until fully cooked.", "Stir in taco seasoning and a little water.", "Warm the taco shells.", "Fill with beef, lettuce, tomato and cheese.", "Top with salsa or sour cream."],
    nutrition: { calories: 490, protein: "31g", carbs: "34g", fat: "25g", fiber: "4g", sodium: "730mg" },
    tips: ["Warm shells just before serving.", "Offer toppings separately so everyone can choose.", "A squeeze of lime adds freshness."]
  },
  {
    id: "mediterranean-quinoa-bowl", name: "Mediterranean Quinoa Bowl", emoji: "🥗", image: "images/mediterranean-quinoa-bowl.jpg",
    category: "Mediterranean", difficulty: "Easy", description: "Fresh quinoa with vegetables and tahini dressing",
    prepTime: 20, cookTime: 35, servings: 2, rating: 4.5, reviews: 156,
    ingredients: ["1 cup dry quinoa", "1 cucumber, chopped", "2 tomatoes, chopped", "1/4 red onion", "1/4 cup olives", "60g feta cheese", "2 tablespoons tahini", "1 lemon", "Fresh parsley"],
    instructions: ["Rinse and cook quinoa following package instructions.", "While it cooks, chop the vegetables.", "Mix tahini with lemon juice and a little water.", "Let quinoa cool slightly and fluff it with a fork.", "Put quinoa in bowls and add vegetables and olives.", "Top with feta, parsley and dressing."],
    nutrition: { calories: 430, protein: "16g", carbs: "51g", fat: "20g", fiber: "9g", sodium: "570mg" },
    tips: ["Rinse quinoa before cooking.", "Chill vegetables for a refreshing bowl.", "Add chickpeas for a different variation."]
  },
  {
    id: "shrimp-scampi", name: "Shrimp Scampi", emoji: "🍤", image: "images/shrimp-scampi.jpg",
    category: "Seafood", difficulty: "Easy", description: "Garlicky shrimp with pasta and a lemon-butter sauce",
    prepTime: 10, cookTime: 15, servings: 2, rating: 4.8, reviews: 356,
    ingredients: ["400g peeled shrimp", "300g linguine pasta", "4 cloves garlic", "1/2 cup vegetable broth", "3 tablespoons butter", "1 tablespoon olive oil", "Fresh parsley", "Lemon juice and zest", "A pinch of chili flakes"],
    instructions: ["Cook linguine until tender and save a little pasta water.", "Heat olive oil and a little butter in a pan.", "Add garlic, then shrimp, and cook until fully cooked.", "Pour in vegetable broth and add the remaining butter.", "Mix in pasta, lemon juice and parsley.", "Serve warm with a little lemon zest."],
    nutrition: { calories: 520, protein: "36g", carbs: "54g", fat: "18g", fiber: "3g", sodium: "620mg" },
    tips: ["Shrimp cooks quickly, so watch it carefully.", "Use fresh lemon for a brighter flavor.", "Toss the pasta in the sauce before serving."]
  },
  {
    id: "bbq-pulled-pork", name: "BBQ Pulled Pork", emoji: "🥪", image: "images/bbq-pulled-pork.jpg",
    category: "American", difficulty: "Medium", description: "Slow-cooked tender pork in smoky barbecue sauce",
    prepTime: 15, cookTime: 240, servings: 4, rating: 4.7, reviews: 412,
    ingredients: ["1kg pork shoulder", "1 cup BBQ sauce", "1/2 cup apple cider vinegar", "2 tablespoons brown sugar", "1 tablespoon paprika", "1 tablespoon garlic powder", "Burger buns", "Coleslaw for serving"],
    instructions: ["Rub pork with paprika, garlic powder and brown sugar.", "Place pork in a slow cooker with vinegar and a little water.", "Cook thoroughly until the meat is tender enough to shred; cooking time depends on your slow cooker.", "Remove the pork, rest briefly and shred with two forks.", "Stir the shredded pork into BBQ sauce.", "Serve on buns with coleslaw."],
    nutrition: { calories: 620, protein: "48g", carbs: "52g", fat: "22g", fiber: "3g", sodium: "1180mg" },
    tips: ["Pork shoulder works well for slow cooking.", "Rest the cooked meat before shredding.", "You can prepare the sauce in advance."]
  },
  {
    id: "vegetable-lasagna", name: "Vegetable Lasagna", emoji: "🥘", image: "images/vegetable-lasagna.jpg",
    category: "Italian", difficulty: "Medium", description: "Baked lasagna layered with vegetables and cheese",
    prepTime: 30, cookTime: 60, servings: 6, rating: 4.8, reviews: 248,
    ingredients: ["9 lasagna sheets", "1 zucchini", "2 cups spinach", "1 bell pepper", "2 cups tomato sauce", "250g ricotta cheese", "150g mozzarella", "1 tablespoon olive oil", "Italian herbs"],
    instructions: ["Preheat the oven to 190°C.", "Chop the vegetables and cook briefly in olive oil.", "Spread a thin layer of tomato sauce in a baking dish.", "Layer lasagna sheets, vegetables, ricotta and sauce.", "Repeat layers, then top with mozzarella.", "Bake until the pasta is tender and the top is golden; rest before serving."],
    nutrition: { calories: 450, protein: "23g", carbs: "49g", fat: "19g", fiber: "6g", sodium: "670mg" },
    tips: ["Drain excess liquid from cooked vegetables.", "Allow lasagna to rest before cutting.", "Sprinkle with basil just before serving."]
  }
];

// Optional profile photo: put images/profile.jpg in your images folder.
const profileAvatar = document.getElementById("profileAvatar");
profileAvatar.onload = function() { profileAvatar.hidden = false; document.getElementById("profileInitials").hidden = true; };
profileAvatar.onerror = function() { profileAvatar.hidden = true; document.getElementById("profileInitials").hidden = false; };
if (profileAvatar.complete && profileAvatar.naturalWidth > 0) profileAvatar.onload();

// App state
let selectedRecipe = null;
let activeTab = "ingredients";
let recentIds = [];
let savedIds = JSON.parse(localStorage.getItem("dinnerSaved") || "[]");
let showPreparationWarnings = true;
let currentPanel = "";

// Choose a random recipe, excluding the one currently shown.
function getRandomRecipe() {
  const choices = recipes.filter(function(recipe) {
    return !selectedRecipe || recipe.id !== selectedRecipe.id;
  });
  return choices[Math.floor(Math.random() * choices.length)];
}

function tryAnotherRecipe() {
  selectRecipe(getRandomRecipe());
}

function selectRecipe(recipe) {
  selectedRecipe = recipe;
  activeTab = "ingredients";
  recentIds = [recipe.id].concat(recentIds.filter(id => id !== recipe.id)).slice(0, 6);
  document.querySelectorAll(".tab").forEach(function(tab) {
    const isActive = tab.dataset.tab === "ingredients";
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  displayRecipe();
  closePanel();
}

function displayRecipe() {
  const recipe = selectedRecipe;
  document.getElementById("recipeName").textContent = recipe.name;
  document.getElementById("recipeDescription").textContent = recipe.description;
  document.getElementById("difficulty").textContent = recipe.difficulty;
  document.getElementById("category").textContent = recipe.category;
  document.getElementById("prepTime").textContent = recipe.prepTime + " min";
  document.getElementById("cookTime").textContent = recipe.cookTime + " min";
  document.getElementById("servings").textContent = recipe.servings + " people";
  document.getElementById("rating").textContent = recipe.rating.toFixed(1);
  document.getElementById("reviewCount").textContent = "(" + recipe.reviews + " reviews)";
  document.getElementById("foodEmoji").textContent = recipe.emoji;

  const image = document.getElementById("recipeImage");
  image.hidden = true;
  image.onload = function() { image.hidden = false; };
  image.onerror = function() { image.hidden = true; };
  image.src = recipe.image; // e.g. images/chicken-pasta.jpg
  image.alt = recipe.name;

  const totalMinutes = recipe.prepTime + recipe.cookTime;
  document.getElementById("prepWarning").hidden = !showPreparationWarnings || totalMinutes <= 45;
  document.getElementById("bookmarkRecipe").classList.toggle("saved", savedIds.includes(recipe.id));
  document.getElementById("bookmarkRecipe").setAttribute("aria-label", savedIds.includes(recipe.id) ? "Remove saved recipe" : "Save this recipe");
  displayTab();
}

function displayTab() {
  const recipe = selectedRecipe;
  const area = document.getElementById("tabContent");
  area.innerHTML = "";

  if (activeTab === "ingredients") {
    area.innerHTML = '<ul class="ingredients-list">' + recipe.ingredients.map(function(item, i) {
      return '<li><span class="item-number">' + (i + 1) + '</span><span>' + item + '</span></li>';
    }).join("") + '</ul>';
  } else if (activeTab === "instructions") {
    area.innerHTML = recipe.instructions.map(function(step, i) {
      return '<div class="instruction-item"><span class="step-number">' + (i + 1) + '</span><p>' + step + '</p></div>';
    }).join("");
  } else if (activeTab === "nutrition") {
    const n = recipe.nutrition;
    const values = [
      ["🔥 Calories", n.calories + " kcal"], ["💪 Protein", n.protein],
      ["🌾 Carbohydrates", n.carbs], ["💧 Fat", n.fat],
      ["🌱 Fiber", n.fiber], ["🧂 Sodium", n.sodium]
    ];
    area.innerHTML = '<div class="nutrition-grid">' + values.map(function(item) {
      return '<div class="nutrition-item"><span>' + item[0] + '</span><strong>' + item[1] + '</strong></div>';
    }).join("") + '</div>';
  } else if (activeTab === "tips") {
    area.innerHTML = recipe.tips.map(function(tip) {
      return '<div class="tip-item">🟠 &nbsp;' + tip + '</div>';
    }).join("");
  }
  area.scrollTop = 0;
}

// Switch between the four tabs.
document.querySelectorAll(".tab").forEach(function(button) {
  button.addEventListener("click", function() {
    activeTab = button.dataset.tab;
    document.querySelectorAll(".tab").forEach(function(tab) {
      const isActive = tab === button;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
    displayTab();
  });
});

document.getElementById("nextRecipe").addEventListener("click", tryAnotherRecipe);

// Save / unsave a recipe with localStorage.
document.getElementById("bookmarkRecipe").addEventListener("click", function() {
  const id = selectedRecipe.id;
  if (savedIds.includes(id)) {
    savedIds = savedIds.filter(item => item !== id);
    showToast("Removed from saved recipes");
  } else {
    savedIds.push(id);
    showToast("Recipe saved!");
  }
  localStorage.setItem("dinnerSaved", JSON.stringify(savedIds));
  document.getElementById("bookmarkRecipe").classList.toggle("saved", savedIds.includes(id));
  document.getElementById("bookmarkRecipe").setAttribute("aria-label", savedIds.includes(id) ? "Remove saved recipe" : "Save this recipe");
});

// Share with native sharing on supported devices; otherwise copy the details.
document.getElementById("shareRecipe").addEventListener("click", async function() {
  const details = selectedRecipe.name + " — " + selectedRecipe.description + "\n" + location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: selectedRecipe.name, text: selectedRecipe.description, url: location.href });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(details);
      showToast("Recipe link copied!");
    } else {
      window.prompt("Copy and share this recipe:", details);
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Sharing unavailable on this browser");
  }
});

const headerPanel = document.getElementById("headerPanel");
function closePanel() { currentPanel = ""; headerPanel.hidden = true; }
function openPanel(type) {
  if (currentPanel === type) { closePanel(); return; }
  currentPanel = type;
  headerPanel.hidden = false;
  if (type === "profile") {
    headerPanel.innerHTML = '<h3>👨‍🍳 Home Cook</h3><p>Welcome to your dinner inspiration!</p><div class="panel-line">' + recipes.length + ' recipes available · ' + savedIds.length + ' saved</div>';
  } else if (type === "saved" || type === "history") {
    const ids = type === "saved" ? savedIds : recentIds;
    headerPanel.innerHTML = '<h3>' + (type === "saved" ? "🔖 Saved Recipes" : "🕒 Recently Viewed") + '</h3>' +
      (ids.length ? ids.map(function(id) {
        const recipe = recipes.find(recipe => recipe.id === id);
        return recipe ? '<button class="menu-recipe" data-recipe="' + recipe.id + '">' + recipe.emoji + ' ' + recipe.name + '</button>' : '';
      }).join("") : '<p>No recipes here yet.</p>');
  } else if (type === "settings") {
    headerPanel.innerHTML = '<h3>⚙️ Settings</h3><label class="panel-check"><input id="warningSetting" type="checkbox" ' + (showPreparationWarnings ? "checked" : "") + '> Show extended preparation warnings</label><p class="panel-line">Recipes are selected randomly each time.</p>';
    document.getElementById("warningSetting").addEventListener("change", function() {
      showPreparationWarnings = this.checked;
      displayRecipe();
    });
  }
}
document.getElementById("profileButton").addEventListener("click", function() { openPanel("profile"); });
document.getElementById("savedButton").addEventListener("click", function() { openPanel("saved"); });
document.getElementById("historyButton").addEventListener("click", function() { openPanel("history"); });
document.getElementById("settingsButton").addEventListener("click", function() { openPanel("settings"); });
headerPanel.addEventListener("click", function(event) {
  const button = event.target.closest("[data-recipe]");
  if (!button) return;
  const recipe = recipes.find(recipe => recipe.id === button.dataset.recipe);
  if (recipe) selectRecipe(recipe);
});
document.addEventListener("click", function(event) {
  if (!event.target.closest(".header-actions")) closePanel();
});

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(function() { toast.hidden = true; }, 2200);
}

// Pick the first recipe when the page loads.
tryAnotherRecipe();
