import { atomWithStorage } from "jotai/utils";
const a = localStorage.getItem("user input");
export const Data = atomWithStorage("user input", {
  exclude_married: false,
  exclude_obese: false,
  max_age: 20,
  min_age: 40,
  min_height: 175.26,
  min_income: 80000,
  race: 0,
  ...(a && JSON.parse(a)),

});

export const APIResponse = atomWithStorage("output",{

  income_base_samples: 443,
  height_base_samples: 39,
  income_probability_in_race: 0.15856284111613353,
  height_probability_in_race: 0.4832182236875091,
  total_probability_in_race: 0.07662045442698277,
  total_probability: 0.004868837904683684,
}
)