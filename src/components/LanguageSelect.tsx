import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Languages = ["en", "mm", "jp"];

const LanguageSelect = () => {
  return (
    <Select defaultValue={Languages[0]}>
      <SelectTrigger className="w-fit border-none uppercase">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Languages.map((language, index) => (
          <SelectItem key={index} value={language} className="uppercase">
            {language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
