import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelect = ({ languages }: { languages: string[] }) => {
  return (
    <Select defaultValue={languages[0]}>
      <SelectTrigger className="w-fit border-none bg-transparent uppercase">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language, index) => (
          <SelectItem key={index} value={language} className="uppercase">
            {language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
