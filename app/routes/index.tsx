import { Link, useLocation } from "remix";

export default function Index() {
  let location = useLocation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {Array(26)
        .fill(null)
        .map((_, i) => {
          let letter = String.fromCharCode(97 + i);
          let search = new URLSearchParams(location.search);
          search.delete(letter);
          let searchString = search.toString();

          return (
            <p key={i}>
              <Link to={`/${searchString ? "?" : ""}${searchString}`}>
                Remove {letter}
              </Link>
            </p>
          );
        })}
    </div>
  );
}
