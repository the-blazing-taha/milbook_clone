
import "./features.css"
export default function Features( {feature} ) {
  return feature.map((item, index) => (
    <ul style={{ textAlign: "left", listStyleType: item.listtype ?? "disc" }}>
  {item.f1 && (
    <li>
      <p>{item.f1}</p>
    </li>
  )}
  {item.f2 && (
    <li>
      <p>{item.f2}</p>
    </li>
  )}
  {item.f3 && (
    <li>
      <p>{item.f3}</p>
    </li>
  )}
</ul>

  ));
}
