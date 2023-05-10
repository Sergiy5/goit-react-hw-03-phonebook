import { WraperFilter, Label, Input } from "./filter.styled"

const Filter = ({ value, onChange }) => (
    <WraperFilter>
    <Label htmlFor="labelFilter">Filter by name</Label>
    <Input type="text" value={value} onChange={onChange} />
    </WraperFilter>
)
export default Filter