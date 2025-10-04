import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Users } from "lucide-react";

export default function GroupTravel() {
  return (
    <section className="py-24 px-6 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl text-card-foreground mb-6">
              Travelling in a group?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Great! Brainstorm, share your thoughts and let Trawell find best spots for everyone.
            </p>
            
            <Card className="p-6" data-testid="card-group-features">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    Collaborative Planning
                  </h3>
                  <p className="text-muted-foreground">
                    Everyone's preferences matter. Share ideas and find common ground.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-1">
                    Smart Suggestions
                  </h3>
                  <p className="text-muted-foreground">
                    AI-powered recommendations that suit your group's vibe.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white w-10 h-10" data-testid="avatar-user-1">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10" data-testid="avatar-user-2">
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-sm">
                      MJ
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10" data-testid="avatar-user-3">
                    <AvatarFallback className="bg-accent text-accent-foreground text-sm">
                      SP
                    </AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  3 members planning
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-accent/30 rounded-lg p-4" data-testid="chat-message-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        AK
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-card-foreground">Anna</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    How about somewhere with beaches and hiking?
                  </p>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4" data-testid="chat-message-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                        MJ
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-card-foreground">Mike</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    And good food! Maybe Mediterranean?
                  </p>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary" data-testid="chat-ai-suggestion">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">AI</span>
                    </div>
                    <span className="text-sm font-medium text-card-foreground">Trawell</span>
                  </div>
                  <p className="text-sm text-card-foreground font-medium">
                    Based on your preferences, I recommend the Algarve coast in Portugal!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
