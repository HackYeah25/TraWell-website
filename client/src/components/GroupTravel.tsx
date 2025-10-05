import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Users } from "lucide-react";

export default function GroupTravel() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-warm-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-card-foreground mb-4 sm:mb-6 lg:mb-8 font-semibold font-display">
              Travelling in a group?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Great! Invite your friends, chat here (like you would on whatsapp group chat) and TraWell will serve recommendations considering your chats content and individual traveller profiles.
            </p>
            
            <Card className="p-4 sm:p-6 lg:p-8 bg-card border-warm-sand shadow-lg" data-testid="card-group-features">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-warm-coral/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-warm-coral" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-card-foreground mb-1">
                    Collaborative Planning
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Everyone's preferences matter. Share ideas and find common ground.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-warm-turquoise/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-warm-turquoise" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-card-foreground mb-1">
                    Considerate Suggestions
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    AI-powered recommendations that suit your group's vibe.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="relative animate-slideInRight">
            <div className="relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-10 shadow-lg border-warm-sand">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-white w-10 h-10 sm:w-12 sm:h-12" data-testid="avatar-user-1">
                    <AvatarFallback className="bg-warm-coral text-white text-xs sm:text-sm">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10 sm:w-12 sm:h-12" data-testid="avatar-user-2">
                    <AvatarFallback className="bg-warm-sand text-card-foreground text-xs sm:text-sm">
                      MJ
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white w-10 h-10 sm:w-12 sm:h-12" data-testid="avatar-user-3">
                    <AvatarFallback className="bg-warm-turquoise text-white text-xs sm:text-sm">
                      SP
                    </AvatarFallback>
                  </Avatar>
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                  3 members planning
                </span>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="bg-warm-turquoise/20 rounded-lg p-3 sm:p-4" data-testid="chat-message-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                      <AvatarFallback className="bg-warm-coral text-white text-xs">
                        AK
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm font-medium text-card-foreground">Anna</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    How about somewhere with beaches and hiking?
                  </p>
                </div>
                
                <div className="bg-warm-sand/30 rounded-lg p-3 sm:p-4" data-testid="chat-message-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="w-5 h-5 sm:w-6 sm:h-6">
                      <AvatarFallback className="bg-warm-sand text-card-foreground text-xs">
                        MJ
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs sm:text-sm font-medium text-card-foreground">Mike</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    And good food! Maybe Mediterranean?
                  </p>
                </div>
                
                <div className="bg-warm-coral/10 rounded-lg p-3 sm:p-4 border-2 border-warm-coral" data-testid="chat-ai-suggestion">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-warm-coral flex items-center justify-center">
                      <span className="text-xs text-white font-bold">AI</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-card-foreground">Trawell</span>
                  </div>
                  <p className="text-xs sm:text-sm text-card-foreground font-medium">
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
