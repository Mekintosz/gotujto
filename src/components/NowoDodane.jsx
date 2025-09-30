export default function NowoDodane() {
  return (
    <section className="p-4 md:p-6 lg:p-8">
      <h2 className="text-[#1b140d] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A vibrant Mediterranean quinoa salad in a white bowl"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApCcKsjuKrZDWfrFa7VFNh8HtPpMUl1EixdfH7LpO75H1yPhX8ZynviFG652BY6vI620rsbW5XSfeH0f75U8U-EGNBCrYs325XDD4BeJh42qx5IlA6r9LSJwwX8KyRU7OEACfWZ8SG2DESK8Dsc4tdWSdeoGjzLNbyA3jGbgRx672WSVhDH4Ft1rTVRmkQEdy5UM9sf8V0LFMq7_kJ8UE0HQYTltAENY0ynrausjhtpcKtiLjfg0TwxQtc3HPkoj0IS8Kys4xdHA')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Mediterranean Quinoa Salad
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Healthy, Fresh, Gluten-Free
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A rich and decadent vegan chocolate mousse in a glass"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_0DAYktL8yLee0GVVe1hh2oChXHVw_Kc21aDseOh0KbPFMjF6uYXef4oRnGKeNgDT7yPgqWMFgIkjFo9PeBp_DOj8OCavX-d8dHBZU8A1Fy4SbAjy-WblO7DuLXXhWR521LxkEykxeJWB3TGLGayyjKFqOgMDC1AevFPN5ta6MeGCTg166vjOb0qbnfxmnx36tVVQb2hWzBB8unvHdvrPf2U4pQzNOGTVn2IWRmvxU5rAKk-YI5mWTH1tvXclK1soQbBBYSSIsg')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Vegan Chocolate Mousse
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Dessert, Dairy-Free, Indulgent
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A bowl of flavorful sheet pan lemon herb chicken"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoH8wCv7SEmzZEYC9XvLmpRWDEIUZki1Yb5Q7WW2aakhTO5hswXetashaZAf6Z2eYD--XmGxVBqgDvzmfDi_WVWa5a5gV3FUa4B1eXE0C0zpp1GQyi5ewMdlp221mCTC-K0TimNjuQZDZySDpiFtLgKsdXLFpQhYW9eb60NQLWOOvv8xWRm0-Kue8rLPdspPkuWopxhgvFIgWV4oD9TOkmeZMBjYkWptZyZBbgU4xI3yf5kT-jVt8wrnUDKzp4g7kxbCQBkahI1A')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Sheet Pan Lemon Herb Chicken
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              One-Pan Meal, Weeknight Dinner
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A refreshing avocado toast with a perfectly poached egg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBjjLga_vJ1t1CKjJDr19TNGOGeMu3i-E-WM767rDDognPvmChFaB6-YZ27zQIVOqZvVNbaDNzcieYXJVdssiwm0zh5frFRR7PuUCfHGqSLFumY9TryaWrh7DwaPQB3IO6c8djyGEGkow9D7YXOyjt1tAeJ22_8L3ddwLoTddg8kTLtX2RQ6vSSrlhX1nNNyi1GMlLVczHZIwUhHAaNr04HzkQJ5vUZKHS3jQbT4sN7wKKal495Y2gC3yWuc6RQzu10J3PxzQxDw')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Avocado Toast with Egg
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Quick Breakfast, Healthy Fats
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
