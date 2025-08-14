
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
        {item.f4 && (
            <li>
                <p>{item.f4}</p>
            </li>
        )}
        {item.f5 && (
            <li>
                <p>{item.f5}</p>
            </li>
        )}
        {item.f6 && (
            <li>
                <p>{item.f6}</p>
            </li>
        )}
        {item.f7 && (
            <li>
                <p>{item.f7}</p>
            </li>
        )}
        {item.f8 && (
            <li>
                <p>{item.f8}</p>
            </li>
        )}
        {item.f9 && (
            <li>
                <p>{item.f9}</p>
            </li>
        )}
</ul>

  ));
}
