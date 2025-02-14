"use client"

import { atomWithStorage } from "jotai/utils";

const storageData = typeof window !== 'undefined' ? localStorage?.getItem("user input") : null;

const defaultData = {
  exclude_married: false,
  exclude_obese: false,
  max_age: 40,
  min_age: 20,
  min_height: 175.26,
  min_income: 80000,
  race: 0,
};

export const Data = atomWithStorage("user input", {
  ...defaultData,
  ...(storageData ? JSON.parse(storageData) : {}),
});//is mein masla aaraha hai jb yaha pr value change horhi vahia tab error araha

export const race = ["Any color or shade", "White", "Black", "Asian"];

export const APIResponse = atomWithStorage("output", {
  income_base_samples: 443,
  height_base_samples: 39,
  income_probability_in_race: 0.15856284111613353,  // in values ko fix rakhna hota shayad.. but yeh to api ke response aane ke bad value update kar rhi hain
  height_probability_in_race: 0.4832182236875091,
  total_probability_in_race: 0.07662045442698277,
  total_probability: 0.004868837904683684,
});
