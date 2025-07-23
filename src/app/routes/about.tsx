import { createFileRoute } from "@tanstack/react-router";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const [path, setPath] = useState("");
  const [filePaths, setFilePaths] = useState<string[]>([]);

  return (
    <div>
      <p>Input folder to read:</p>
      <Input value={path} onChange={(e) => setPath(e.target.value)} />
      <Button
        onClick={() => {
          setFilePaths(fileSystem.readdir(path));
        }}
      >
        Read
      </Button>
      <ul>
        {filePaths.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
