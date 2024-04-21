export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  nutrition: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
}
