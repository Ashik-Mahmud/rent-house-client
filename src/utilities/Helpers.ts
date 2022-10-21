export const getAllTheCity = async () => {
  const response = await fetch(
    "https://bdapis.herokuapp.com/api/v1.1/divisions"
  );
  const data = await response.json();
  return data;
};

export const getDistrictByDivision = async (division: string) => {
  const response = await fetch(
    `https://bdapis.herokuapp.com/api/v1.1/division/${division}`
  );
  const data = await response.json();
  return data;
};
