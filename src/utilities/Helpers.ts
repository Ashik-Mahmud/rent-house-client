export const getAllTheCity = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/fahimreza-dev/bangladesh-geojson/master/bd-divisions.json"
  );
  const data = await response.json();
  return data;
};

export const getDistrictByDivision = async (division: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/fahimreza-dev/bangladesh-geojson/master/bd-districts.json`
  );
  const data = await response.json();
  return data;
};
