import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { InstallPrompt } from "./components/InstallPrompt";
import { Home } from "./pages/Home";
import { FieldPage } from "./pages/FieldPage";
import { CoursePage } from "./pages/CoursePage";
import { LessonPage } from "./pages/LessonPage";
import { StateExamPage } from "./pages/StateExamPage";
import { StateExamLessonPage } from "./pages/StateExamLessonPage";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obor/:fieldId" element={<FieldPage />} />
        <Route path="/obor/:fieldId/studijni-zkouska" element={<StateExamPage />} />
        <Route
          path="/obor/:fieldId/studijni-zkouska/:subjectId/lekce/:lessonId"
          element={<StateExamLessonPage />}
        />
        <Route path="/obor/:fieldId/predmet/:courseId" element={<CoursePage />} />
        <Route
          path="/obor/:fieldId/predmet/:courseId/lekce/:lessonId"
          element={<LessonPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <InstallPrompt />
    </Layout>
  );
}
