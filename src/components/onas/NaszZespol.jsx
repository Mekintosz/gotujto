const team = [
  {
    name: "Anna Kowalska",
    role: "Założycielka i Redaktor Naczelna",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCltzutL26VE1wvWXYDH_uzdJ49o_BOCOfQWYp_HoPk8bZhz3W9AlDbKKf_Jj82Ry6VuNM-oGSpkz6osMiMV5I1ndPK-wChG3DNkOHFIWFMcxH3Xx-7VpAvd3bUyC4QscW9EO7eFCRxWOrrExGUavyZzpWcmIsooi9_xIoa-OJCdNRaplMUXo9uvNROL5TMsTPKPNSSTzYtEVKembVDbIIsP2ktMkl1N-7Tb61FI4b5G329svPyOx3dFU9ebEn584NXn70TE1jgZg",
  },
  {
    name: "Piotr Nowak",
    role: "Szef Działu Przepisów",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAx5rXP5miBUn9CUrhrDtVDiOJNAFNcP1RgMvb4GkUv8U1FaPFdCKwnJ1Dz1SEW2FnK83SKcjtiD_EKhV5UB_jYB5XEfyM_rg532FLQHwWJOghuPc8fhsDc-4tBspIWgPzCuFqn_MbyfjVdqHQvdZk9le5OoNRZVyrHiSHxmtLGiqU1qYYijOfDnZPYlp0s7pKPuBhlop5HzCfvpRk31x1LULUW1E3GuR1ls7aH6i18YQe3rMR4ahUP7OpUABLsKYw2-2IqMcfQlA",
  },
  {
    name: "Zofia Wiśniewska",
    role: "Community Manager",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9L_jScdhppgrIUz2koKh4rIInLDUcxinno0QtNPhMcP5SFZhzD1XkOUub1R2LNY8REHh0hg-xUJEdrtlmEpWz7ZuC6X8Iwf3iNxXufizTlhel3vJ1E2RM6gKk4PGV0SKQjrcPX4B0EEg-0xyTAwWlaphsAfDy6-h-s7sEC1U-1z8R03b4wADPxJWJkFmCeqHp6HdnT7PoU9WodgRmzJlGv3z8xhyYHD5MtA1w75LIsOEaXHKl8ULHm0S8WRXg-vcaOo-oTzOg7Q",
  },
];

export default function NaszZespol() {
  return (
    <section className="px-4 py-16">
      <h2 className="mb-12 text-center font-headings text-4xl text-text-primary d:text-5xl">
        Zespół
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center"
          >
            <div
              className="h-44 w-44 rounded-full border-4 border-secondary bg-cover bg-center bg-no-repeat shadow-lg"
              style={{ backgroundImage: `url('${member.image}')` }}
            />
            <h3 className="mt-5 text-xl font-bold text-text-primary">
              {member.name}
            </h3>
            <p className="text-sm text-shadow-text-secondary">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
