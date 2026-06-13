type Props = {
  placeholer: string;
  name: string;
};

export default function TextInput({ placeholer, name }: Props) {
  return (
    <div>
      <input type="text" placeholder={placeholer} name={name} />
    </div>
  );
}
