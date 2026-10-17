// next.config.mjs
import path from "path";
import { fileURLToPath } from "url";
import withVideos from "next-videos";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/project/:id", // Custom URL
        destination: "/components/project/:id", // Actual file path
      },
    ];
  },
};

export default withVideos(nextConfig);
