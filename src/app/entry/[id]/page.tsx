
export default function EntryPage({
    params: { id: entryId },
  }: {
    params: { id: string };
  }) {

    return <p>Entry: {entryId}</p>
}
  