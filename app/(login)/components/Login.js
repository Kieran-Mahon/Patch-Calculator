import { Field, FieldGroup, FieldSeparator, FieldDescription, FieldLabel} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="w-full bg-red-100">
      <FieldGroup>
        <Field>
          <Input type="text" placeholder="Username" />
        </Field>
        <FieldSeparator />
        <Field>
          <Input type="password" placeholder="Password" />
        </Field>
      </FieldGroup>
    </div>
  );
}
