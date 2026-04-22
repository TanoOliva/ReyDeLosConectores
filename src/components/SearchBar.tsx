interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search">
      Buscar por nombre, SKU, aplicación o marca
      <input
        type="search"
        placeholder="Ej: XT60, OBD2, RJ45..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
