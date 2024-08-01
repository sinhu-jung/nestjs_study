import { redirect } from 'next/navigation';
import { comments } from '../data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  if (parseInt(params.id) > comments.length) {
    redirect('/comments');
  }
  const comment = comments.find((comment) => comment.id === Number(params.id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id),
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const deleteComment = comments.filter(
    (comment) => comment.id !== parseInt(params.id),
  );
  return Response.json(deleteComment);
}
