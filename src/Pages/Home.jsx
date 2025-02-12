/*
import React from 'react';
import NavBar from "../componets/NavBar";
import TopicBox from "../componets/TopicBox";

export default function Home() {
    return (
        <div>
            <NavBar/>
            {/!*use One Prpos*!/
            /!*<TopicBox food="Kottu"/>
            <TopicBox food="Rice"/>
            <TopicBox food="Hopppers"/>*!/}

            {/!*use multi props*!/}
          {/!*  <TopicBox food="Kottu" price="Rs 250" >
                <span>This is a Description</span>
            </TopicBox>

            <TopicBox food="Rice" price="Rs 304" >
            <button>Submit</button>
            </TopicBox>

            <TopicBox food="Hopppers" price="Rs 450" >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda consequuntur, corporis, deserunt dignissimos eos illo itaque nostrum quidem repellendus sequi vel velit? Aliquid, eaque facilis fugiat id in iusto magnam maxime mollitia nemo perferendis quibusdam totam unde! Aut laboriosam maiores molestiae quisquam reiciendis? Ab ad alias architecto aspernatur assumenda cumque debitis distinctio ducimus ea exercitationem facilis fugit, harum, impedit in inventore labore maxime molestias nobis nulla odit placeat quibusdam quo, quod rem repellat repellendus sed temporibus vel vitae voluptatum? Architecto beatae dolore eos ipsam libero nobis perspiciatis quasi veniam voluptatem? Accusamus accusantium at eos pariatur repellendus sint voluptatum. Aut delectus quaerat quod similique. Ab accusantium ad adipisci amet animi aut blanditiis consequuntur cupiditate distinctio dolorem eligendi error et ex expedita facere fugit illum itaque maxime minus molestias natus nemo nesciunt odio, placeat, porro possimus quasi quidem quis quo rem repudiandae saepe sint tenetur totam unde vero voluptates. Dolore inventore, laboriosam neque nobis obcaecati ullam. Consectetur dicta ducimus eaque eius, explicabo hic illo laborum libero minima nobis non nostrum obcaecati officiis optio placeat sequi vitae? Corporis deserunt dolore fugit rerum soluta. Aut dicta doloremque eaque enim fuga inventore labore quos totam vitae voluptates. Aliquam dolorem ea incidunt natus nostrum provident, sed! Animi, autem culpa in quos sapiente suscipit? Aperiam aspernatur consequuntur esse est excepturi explicabo maiores pariatur tenetur! Aliquam animi at dicta eos error, est et ipsa ipsum laborum libero, minima, mollitia nobis nostrum nulla omnis optio porro praesentium quas quibusdam quod suscipit tenetur velit voluptas. Asperiores consequatur corporis ea fugit hic, labore maxime porro quisquam? Atque dignissimos et eum laboriosam laborum magni, maiores necessitatibus nobis odio voluptatibus. Ad aliquid asperiores aspernatur atque consequatur corporis delectus deserunt dolores ea eaque est eum eveniet fugit harum hic in inventore ipsum libero neque nisi nostrum numquam officiis quasi quia quis quo rerum sed sint sit, suscipit unde velit voluptate, voluptatibus! Adipisci beatae cumque doloribus eligendi maiores mollitia, neque numquam quas quod quos rerum unde, ut voluptate. Ab aliquam autem eaque eos est eum fugit, inventore iste iure libero magnam molestiae mollitia natus numquam officia quis sapiente similique sunt totam unde vel velit veritatis? Assumenda deserunt doloribus eius eum impedit iusto nam odio placeat quae? Ad, animi architecto culpa cum enim eveniet expedita explicabo facere fugiat harum illum impedit in inventore ipsam ipsum itaque, maiores molestiae mollitia nulla pariatur perspiciatis quidem quo rem repudiandae saepe sapiente sequi soluta suscipit ullam voluptates. Cum omnis, rerum? Amet, magni soluta? Accusamus, amet architecto, beatae corporis debitis eaque exercitationem fugit id, illum maiores nemo nesciunt obcaecati quidem quis quos sint sit soluta vel vero voluptatum! Dolore esse eum explicabo harum, in laudantium possimus quia vitae. Ab aliquam aliquid, amet aspernatur, assumenda aut cum cupiditate debitis deleniti doloremque ducimus eligendi et eveniet excepturi neque, praesentium quasi quibusdam recusandae repellendus similique ullam voluptate voluptatibus. Accusamus aliquid animi aperiam aspernatur consectetur consequuntur corporis cumque ducimus eligendi exercitationem facilis fugit id impedit incidunt ipsa itaque maiores nam natus, nobis odit porro possimus repellat repudiandae saepe suscipit tempore unde vero, voluptates.</p>
            </TopicBox>
*!/}

        </div>
    )
}
*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import NavBar from "../componets/NavBar";
import TopicBox from "../componets/TopicBox";

export default function Home() {
    return (
        <div>
            {/* Navbar */}
            <NavBar />

            {/* Hero Section */}
            <div className="container-fluid bg-primary text-white text-center py-5 animate__animated animate__fadeIn">
                <h1 className="display-4">Welcome to My Portfolio</h1>
                <p className="lead">Discover my projects, skills, and more!</p>
                <button className="btn btn-light btn-lg mt-3 animate__animated animate__pulse animate__infinite">
                    Get Started
                </button>
            </div>

            {/* Topic Sections */}
            <div className="container my-5">
                <h2 className="text-center mb-4 animate__animated animate__fadeInUp">Topics</h2>
                <div className="row">
                    {/*<div className="col-md-4 mb-4 animate__animated animate__zoomIn">
                        <TopicBox title="Web Development" description="Building responsive and dynamic websites." />
                    </div>
                    <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-1s">
                        <TopicBox title="Software Engineering" description="Creating robust software solutions." />
                    </div>
                    <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-2s">
                        <TopicBox title="UI/UX Design" description="Designing intuitive and engaging interfaces." />
                    </div>*/}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                © 2025 Vishan | All Rights Reserved
            </footer>
        </div>
    );
}
