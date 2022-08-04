//tanpa await

function getHolidayName() {
  const request = new Request("api/2022.json", {
    method: "GET",
  });
  const response = fetch(request);
  return response.then((response) => response.json());
}

getHolidayName().then((holidayName) => console.log(holidayName));

//promise <string HolidayName>
//chaining method
function HolidayNamePromise() {
  return new Promise((resolve, reject) => {
    getHolidayName()
      .then((get) => resolve(get[4].holiday_name))
      .catch((error) => resolve("product not found"));
  });
}

//await hanya dapat dilakukan di dalam asnyc function, contoh sbb
async function getNameHolliday() {
  const name = await getHolidayName();
  return name[8].holiday_name;
}

getNameHolliday().then((holiday) => console.log(holiday));
HolidayNamePromise().then((holiday) => console.log(holiday));

// dapa menggunakan method yang lebih simple dengan menggunakan await

// error handle asnyc await
async function handler() {
  try {
    const holidayName = await getHolidayName();
    return holidayName[19].holiday_name;
  } catch (e) {
    return "401: Forbidden";
  }
}
handler().then((response) => console.log(response));
