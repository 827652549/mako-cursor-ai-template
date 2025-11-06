'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AlertCircle, XCircle } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useI18n } from '@/hooks/useI18n';

type ComponentCategory = 'Forms' | 'Data Display' | 'Feedback' | 'Layout' | 'Navigation' | 'Overlay';

function getComponents(t: (key: string) => string) {
  return [
    {
      name: 'Button',
      key: 'button',
      category: 'Forms' as ComponentCategory,
      example: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      ),
    },
    {
      name: 'Badge',
      key: 'badge',
      category: 'Data Display' as ComponentCategory,
      example: (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
    },
    {
      name: 'Alert',
      key: 'alert',
      category: 'Feedback' as ComponentCategory,
      example: (
        <div className="space-y-2">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{t('components.examples.alert.title')}</AlertTitle>
            <AlertDescription>
              {t('components.examples.alert.description')}
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>{t('components.examples.alert.errorTitle')}</AlertTitle>
            <AlertDescription>
              {t('components.examples.alert.errorDescription')}
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
    {
      name: 'Input',
      key: 'input',
      category: 'Forms' as ComponentCategory,
      example: (
        <div className="space-y-2 w-full max-w-sm">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input disabled placeholder="Disabled" />
        </div>
      ),
    },
    {
      name: 'Textarea',
      key: 'textarea',
      category: 'Forms' as ComponentCategory,
      example: (
        <Textarea placeholder={t('components.examples.textarea.placeholder')} className="w-full max-w-sm" />
      ),
    },
    {
      name: 'Label',
      key: 'label',
      category: 'Forms' as ComponentCategory,
      example: (
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="email">{t('components.examples.label.email')}</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
      ),
    },
    {
      name: 'Checkbox',
      key: 'checkbox',
      category: 'Forms' as ComponentCategory,
      example: (
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">{t('components.examples.checkbox.terms')}</Label>
        </div>
      ),
    },
    {
      name: 'Switch',
      key: 'switch',
      category: 'Forms' as ComponentCategory,
      example: (
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">{t('components.examples.switch.airplaneMode')}</Label>
        </div>
      ),
    },
    {
      name: 'Radio Group',
      key: 'radioGroup',
      category: 'Forms' as ComponentCategory,
      example: (
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">{t('components.examples.radioGroup.default')}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">{t('components.examples.radioGroup.comfortable')}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">{t('components.examples.radioGroup.compact')}</Label>
          </div>
        </RadioGroup>
      ),
    },
    {
      name: 'Select',
      key: 'select',
      category: 'Forms' as ComponentCategory,
      example: (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t('components.examples.select.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">{t('components.examples.select.light')}</SelectItem>
            <SelectItem value="dark">{t('components.examples.select.dark')}</SelectItem>
            <SelectItem value="system">{t('components.examples.select.system')}</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      name: 'Card',
      key: 'card',
      category: 'Layout' as ComponentCategory,
      example: (
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{t('components.examples.card.title')}</CardTitle>
            <CardDescription>{t('components.examples.card.description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{t('components.examples.card.content')}</p>
          </CardContent>
        </Card>
      ),
    },
    {
      name: 'Tabs',
      key: 'tabs',
      category: 'Navigation' as ComponentCategory,
      example: (
        <Tabs defaultValue="account" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="account">{t('components.examples.tabs.account')}</TabsTrigger>
            <TabsTrigger value="password">{t('components.examples.tabs.password')}</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            {t('components.examples.tabs.accountContent')}
          </TabsContent>
          <TabsContent value="password">
            {t('components.examples.tabs.passwordContent')}
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: 'Separator',
      key: 'separator',
      category: 'Layout' as ComponentCategory,
      example: (
        <div className="w-full max-w-sm space-y-1">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              {t('components.examples.separator.description')}
            </p>
          </div>
          <Separator />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>{t('components.examples.separator.blog')}</div>
            <Separator orientation="vertical" />
            <div>{t('components.examples.separator.docs')}</div>
            <Separator orientation="vertical" />
            <div>{t('components.examples.separator.source')}</div>
          </div>
        </div>
      ),
    },
    {
      name: 'Progress',
      key: 'progress',
      category: 'Feedback' as ComponentCategory,
      example: (
        <div className="w-full max-w-sm space-y-2">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
        </div>
      ),
    },
    {
      name: 'Slider',
      key: 'slider',
      category: 'Forms' as ComponentCategory,
      example: (
        <div className="w-full max-w-sm space-y-2">
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      ),
    },
    {
      name: 'Avatar',
      key: 'avatar',
      category: 'Data Display' as ComponentCategory,
      example: (
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      ),
    },
    {
      name: 'Skeleton',
      key: 'skeleton',
      category: 'Feedback' as ComponentCategory,
      example: (
        <div className="w-full max-w-sm space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ),
    },
    {
      name: 'Accordion',
      key: 'accordion',
      category: 'Layout' as ComponentCategory,
      example: (
        <Accordion type="single" collapsible className="w-full max-w-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('components.examples.accordion.q1')}</AccordionTrigger>
            <AccordionContent>
              {t('components.examples.accordion.a1')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t('components.examples.accordion.q2')}</AccordionTrigger>
            <AccordionContent>
              {t('components.examples.accordion.a2')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{t('components.examples.accordion.q3')}</AccordionTrigger>
            <AccordionContent>
              {t('components.examples.accordion.a3')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      name: 'Dialog',
      key: 'dialog',
      category: 'Overlay' as ComponentCategory,
      example: (
        <Dialog>
          <DialogTrigger asChild>
            <Button>{t('components.examples.dialog.button')}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('components.examples.dialog.title')}</DialogTitle>
              <DialogDescription>
                {t('components.examples.dialog.description')}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      name: 'Dropdown Menu',
      key: 'dropdownMenu',
      category: 'Overlay' as ComponentCategory,
      example: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{t('components.examples.dropdownMenu.button')}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('components.examples.dropdownMenu.label')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{t('components.examples.dropdownMenu.profile')}</DropdownMenuItem>
            <DropdownMenuItem>{t('components.examples.dropdownMenu.settings')}</DropdownMenuItem>
            <DropdownMenuItem>{t('components.examples.dropdownMenu.logout')}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      name: 'Popover',
      key: 'popover',
      category: 'Overlay' as ComponentCategory,
      example: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{t('components.examples.popover.button')}</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">{t('components.examples.popover.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('components.examples.popover.description')}
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      name: 'Tooltip',
      key: 'tooltip',
      category: 'Overlay' as ComponentCategory,
      example: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{t('components.examples.tooltip.button')}</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t('components.examples.tooltip.content')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
    },
  ];
}

const categoryMap: Record<ComponentCategory, string> = {
  'Forms': 'components.categories.forms',
  'Data Display': 'components.categories.dataDisplay',
  'Feedback': 'components.categories.feedback',
  'Layout': 'components.categories.layout',
  'Navigation': 'components.categories.navigation',
  'Overlay': 'components.categories.overlay',
};

export default function ComponentsPage() {
  const { t, locale } = useI18n();
  const components = useMemo(() => getComponents(t), [t]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(components.map((c) => c.category)));
    return ['All', ...cats];
  }, [components]);

  const filteredComponents = useMemo(() => {
    if (selectedCategory === 'All') {
      return components;
    }
    return components.filter((c) => c.category === selectedCategory);
  }, [components, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/">
              <Button variant="ghost" size="sm">
                ← {t('common.backToHome')}
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">{t('components.title')}</h1>
          <p className="text-muted-foreground">
            {t('components.description')}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const categoryKey = category === 'All' ? 'components.all' : categoryMap[category as ComponentCategory];
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'All' ? t('components.all') : t(categoryKey)}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component) => (
            <Card key={component.name} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{component.name}</CardTitle>
                  <Badge variant="secondary">
                    {categoryMap[component.category] ? t(categoryMap[component.category]) : component.category}
                  </Badge>
                </div>
                <CardDescription>
                  {t(`components.componentDescriptions.${component.key}`)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-muted/50 p-4">
                  {component.example}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            {t('components.footer', { count: components.length })}{' '}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              shadcn/ui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
