import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div>
        <Button variant={'elevated'}>Hello</Button>
      </div>
      <div>
        <Input placeholder="I am input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea placeholder="I am text area" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
