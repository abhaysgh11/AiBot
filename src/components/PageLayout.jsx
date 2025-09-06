import React from "react";


// interface PageLayoutProps = {
//         children: React.ReactNode;
// };
// const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
//     return (
//         <html className="h-full">
//             <body className="h-full">{children}</body>
//         </html>
//     );
// };

// const PageLayout: React.FC<{ children}> = ({ children }) => {
//     return (
//         <html className="h-full">
//             <body className="h-full">{children}</body>
//         </html>
//     );
// };
// export default PageLayout;

// const PageLayout = ({ children }) => {
// return (
//     <html className="h-full">
//     <body className="h-full">{children}</body>
//     </html>
//     );
// };

// export default PageLayout;


const PageLayout = ({ children }) => {
    return <div className="h-full">{children}</div>;
};

export default PageLayout;