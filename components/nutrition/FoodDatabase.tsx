import CommonButton from "../common/button/CommonButton";
import CommonHeader from "../common/header/CommonHeader";

const foodDatabase = [
  {
    name: "Chicken Breast",
    category: "Protein",
    calories: "165 kcal",
    protein: "31g",
    carbs: "0g",
    fat: "3.6g",
    scans: 1247,
  },
  {
    name: "Brown Rice",
    category: "Grains",
    calories: "215 kcal",
    protein: "5g",
    carbs: "45g",
    fat: "1.6g",
    scans: 982,
  },
  {
    name: "Broccoli",
    category: "Vegetables",
    calories: "55 kcal",
    protein: "3.7g",
    carbs: "11g",
    fat: "0.6g",
    scans: 743,
  },
  {
    name: "Salmon",
    category: "Protein",
    calories: "206 kcal",
    protein: "22g",
    carbs: "0g",
    fat: "13g",
    scans: 856,
  },
  {
    name: "Avocado",
    category: "Fruits",
    calories: "160 kcal",
    protein: "2g",
    carbs: "8.5g",
    fat: "14.7g",
    scans: 1102,
  },
];
const FoodDatabase = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <CommonHeader size="md" className="pb-7.5">
        Food Database ({foodDatabase.length} items)
      </CommonHeader>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-primary">
          <thead>
            <tr className="border-b-[1.73px] border-border text-left text-primary font-normal text-sm">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Calories</th>
              <th className="py-3 px-4">Protein</th>
              <th className="py-3 px-4">Carbs</th>
              <th className="py-3 px-4">Fat</th>
              <th className="py-3 px-4">Total Scans</th>
            </tr>
          </thead>
          <tbody>
            {foodDatabase.map((item, index) => (
              <tr
                key={index}
                className=" border-b-[1.73px] border-border last:border-0"
              >
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">
                  <CommonButton variant="small" size="xs">
                    {item.category}
                  </CommonButton>
                </td>
                <td className="py-3 px-4">{item.calories}</td>
                <td className="py-3 px-4">{item.protein}</td>
                <td className="py-3 px-4">{item.carbs}</td>
                <td className="py-3 px-4">{item.fat}</td>
                <td className="py-3 px-4">{item.scans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodDatabase;
