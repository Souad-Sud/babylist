import type { Item } from "../utils/types";


export const pagesLinks: string[] = ["Home", "Health", "Guides", "Categories", "Shop"];

export const items: Item[] = [
  {
    name: "Item 1",
    img: "baby8.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate nobis veritatis dolorem dolor? Pariatur hic eius minus mollitia provident soluta eum culpa sequi libero exercitationem praesentium, repellendus obcaecati ratione. 1.",
    bgclr: "primary1",
    bgclrOutsidDiv: "secondary1",  
},
  {
    name: "Item 2",
    img: "baby2.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate nobis veritatis dolorem dolor? Pariatur hic eius minus mollitia provident soluta eum culpa sequi libero exercitationem praesentium, repellendus obcaecati ratione. 2.",
    bgclr: "primary2",
    bgclrOutsidDiv: "secondary2", 

},
  {
    name: "Item 3",
    img: "baby1.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate nobis veritatis dolorem dolor? Pariatur hic eius minus mollitia provident soluta eum culpa sequi libero exercitationem praesentium, repellendus obcaecati ratione. 3.",
    bgclr: "primary3",
     bgclrOutsidDiv: "secondary3", 

},
  {
    name: "Item 4",
    img: "baby3.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate nobis veritatis dolorem dolor? Pariatur hic eius minus mollitia provident soluta eum culpa sequi libero exercitationem praesentium, repellendus obcaecati ratione. 4.",
    bgclr: "primary4",
     bgclrOutsidDiv: "secondary4",  
},
  {
    name: "Item 5",
    img: "baby9.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate nobis veritatis dolorem dolor? Pariatur hic eius minus mollitia provident soluta eum culpa sequi libero exercitationem praesentium, repellendus obcaecati ratione. 5.",
    bgclr: "primary5",
    bgclrOutsidDiv: "secondary5",   
 },
  {
    name: "Item 6",
    img: "baby6.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate nobis veritatis dolorem dolor? Pariatur hic eius minus mollitia provident soluta eum culpa sequi libero exercitationem praesentium, repellendus obcaecati ratione. 6.",
    bgclr: "primary6",
     bgclrOutsidDiv: "secondary6",    
}
];

export class Babylist {
  name: string;
  description: string;
  image: string;
  group!: string;

  constructor(name: string, description: string, image: string, group: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.group = group;
  }
}

 const Health: Babylist[]  = [
    new Babylist("Activity", 
            "Plants matter like fruit, insects and small animals like mice and lizards",
            'activity.jpg', "Health"),
    new Babylist("Pulse",
           "Insects and small animals including snakes, frogs and lizards",  
           'pulse.jpg', "Health" ),
    new Babylist("Grimace",        
           "Fruit, seeds and other plant material", 
           'grimace.jpg', "Health"),
    new Babylist("Appearance",        
           "Fruit, seeds and other plant material", 
           'appearance.jpg',  "Health"),
    new Babylist("Respiration",        
           "Fruit, seeds and other plant material", 
           'respiration.jpg',  "Health")
];


const Guides: Babylist[] = [
    new Babylist("Pregnancy",        
            "insects such as ants and termites, beetle larvae and worms",
            'baby2.jpg', "Guides"),
    new Babylist("First Trimester", 
            "A predator, they eat meat from other animals such as wallabies and wombats.",
            'baby5.jpg', "Guides"),
    new Babylist("Second Trimester",
            "Plant eaters, they munch on shrubs and grasses", 
            'baby6.jpg', "Guides"), 
    new Babylist("Third Trimester",
            "Plant eaters, they munch on shrubs and grasses", 
            'baby9.jpg', "Guides"),
    new Babylist("Labor and Birth",
            "Plant eaters, they munch on shrubs and grasses", 
            'baby3.jpg', "Guides")           
];
   
const Categories: Babylist[] = [
        new Babylist("Toys", 
            "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
            'baby1.jpg', "Categories"),
        new Babylist("Baby names",            
            "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
            'baby2.jpg', "Categories"),
        new Babylist("Bottles",
            "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", 
            'baby3.jpg', "Categories"),
        new Babylist("Cribs",
            "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", 
            'baby4.jpg', "Categories"),
        new Babylist("Clothing",
            "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", 
            'baby5.jpg', "Categories"),
                
];


export const AllBabylist: Babylist[] = [...Health, ...Guides, ...Categories];

// ✅ Export individual lists if needed in components
export { Health, Guides, Categories };
 


// export {AllAnimals, Birds, Mammals, Reptiles};

// export const animalCategory = [
//     ...new Set(AllAnimals.map((animal) => animal.group)),
// ];

// export const  mammalNames = AllAnimals
//   .filter(animal => animal.group === "Mammals")
//   .map(animal => animal.name);

// export const birdNames = AllAnimals
//   .filter(animal => animal.group === "Birds")
//   .map(animal => animal.name); 

// export const reptileNames = AllAnimals
//   .filter(animal => animal.group === "Reptiles")
//   .map(animal => animal.name);

//   console.log(mammalNames);
//   console.log(birdNames);
//   console.log(reptileNames);

