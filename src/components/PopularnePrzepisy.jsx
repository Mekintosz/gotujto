export default function PopularnePrzepisy() {
  return (
    <section className="p-4 md:p-6 lg:p-8">
      <h2 className="text-[#1b140d] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
        Popular Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A delicious looking classic lasagna in a baking dish"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV7HcNQklgOEHQndvNb6ujcXjdXncme3fCw52py_7VD2VmwcHEk--UxWaJqRTC5oTJTrK_RDcaPr5enABMXREa_cdF85v-M-AqbwZhweL1UE1pH3JLwWtlPHvuAXm9f-B5M3gbpwbFljIg72DFr2YBPmRSDWyOHyuqK7WlawPuW9JEFaCvgJ-XWu4Ru5uu0cLDWM6vv6eHmvI4Lnij1rwd3Ewg6xzuGyfea-8ANHuLNMt2PDyFMwOmT27BtB2FwpPFEX6aDetoNw')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Classic Lasagna
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Hearty, Cheesy, Family Favorite
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A colorful and spicy chicken stir-fry in a wok"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDz-2E5SUBjjXIGiB7FAOebUpA77YEpoAdciqFHpiimqsBb8BdxqycCjdjZTyh7Qlc_97TwDrhTdw5SDgZXn7lQ66yLNv9-Q3d2HCnM3WuXvEw0Bx95mnVFAXu9OjT5JDzfUZRHuIjHg-sLNcXXKy1CnDtR6AbRHoig3ibQCSINUu7HbU7MUeks_LYGKIeG7IVgtWAxQACDg3h3crc7pAGO4WKARadncx7CME9K5m3PHOURmNOf2sB7-NBwq9P_-2JxSWCfexA7_A')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Spicy Chicken Stir-Fry
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Quick, Easy, Flavorful
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A creamy tomato soup in a bowl, garnished with basil"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqz67AtV4r2XvaDtts6Ka4_A7475_N6ePYzeePhJWmfm4nCgIxNT8WQk93Nklro2pTcx8tvjib1iyovk8Y9IH0OlYWEZCOWH3Cs3Ah1TE9vE1B4BX6JK1iHiR4f4wtWRF4Qzxkuj0l2gnde1TSozDQaBs8xj0FB0H60h7y-VfDAbI401M2TxDO786wi4ffAUY5opCXGixHtTzFEs5e--Tb9vaf7WuU0glBIOyfIIiwb2XfnLZ9Unr_xeY1EvhFlIRhWOKDkGrqLQ')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Creamy Tomato Soup
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Comfort Food, Vegetarian
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg">
          <div
            className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
            data-alt="A stack of fluffy pancakes with berries and syrup"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOmeT07g1wZ1PKHvktdt4X53-uK5C5uoUHYlcs-L1i0D-ErTXLx9LXEfotdHJMeqdkq_BWNIBROhWxRrgsbKO6IreJaJFDtZuyFstRtDrUVdjY2Gq1_eWl2gLyCvq1_QOI0Z4nuacXQx-lVSYWRrZfOaml7zHfvOuFNvkdo25NNYxt-uNOB8SlPaRGkpW0nNJ36vYo4uGIXPq4ZejDaN7Q-BNiVKhbcCMzlRFq6iv_xbQfmcIZrb7b5EE9DZU5uigo4vyt0yFT5Q')",
            }}
          ></div>
          <div>
            <h3 className="text-[#1b140d] text-lg font-bold leading-snug">
              Fluffy Pancakes
            </h3>
            <p className="text-[#9a704c] text-sm font-normal leading-normal">
              Breakfast Classic, Sweet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
