type Props = { title: string };

export default function Heading({ title }: Props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}
