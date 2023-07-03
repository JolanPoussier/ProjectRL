import Link from "next/link";
import Moves from "./moves";

export default function Page() {
    return (
      <div>
        <h1>Category</h1>
        {Moves.map((move) => 
        <Link key={move.id} href={`/category/${move.title}`}>{move.title}<br /></Link>
        )}
      </div>
    )
  }      