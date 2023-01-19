import Link from "next/link";
import NavBar from '../components/NavBar';

const PostLink = props => {
  return (
    <div>
      <Link href="/post/[id]" as={`/post/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </div>
  );
};

export default function Index() {
  return (
    <>
      <NavBar />
      <PostLink id="Learn-ReactJS" />
      <PostLink id="Learn-NextJS" />
      <PostLink id="Learn-Javascript" />
    </>
  );
}


// const PostLink = (props) => {
//   return (
//       <li>
//           <Link href="/post/[id]" as={`/post/${props.id}`}>
//               <a>{props.id}</a>
//           </Link>
//       </li>
//   );
// }

// const Index = () => {
//   return (
//       <div>
//           <p>You are in Index page</p>
//           <ul>
//               <PostLink id="Learn JS" />
//               <PostLink id="Learn ReactJS" />
//               <PostLink id="Learn Jest" />
//           </ul>
//       </div>
//   );
// }

// export default Index;