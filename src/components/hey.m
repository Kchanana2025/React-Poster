%simplex
%function hmesha minimization ka hona chahie
%maximization ka hua toh aage - lga dena
clc
clear 
format short%display upto 4 digits
a=1
b=0.5
f=@(x,y)x^2+y^2-x*y
tol=0.05
grad=@(x,y)[2*x-y,-x+2*y]
itr=0
for k=1:1000%iterations
     grad(a,b)
 d =-grad(a,b)/norm(grad(a,b));%- lgana dont forget
 if norm(grad(a,b))<tol
     fprintf('min %f',x1);
     fprintf('itr %d',itr);
     break
 end
 itr=itr+1;
 fun=@(z)(a+z*d(1))^2+(b+z*d(2))^2-(a+z*d(1))*(b+z*d(2));
 x1 =fminbnd(fun,0,1000)
 a=a+x1*d(1)
 b=b+x1*d(2)
end

%


steepest


clc
clear all
a=[50 40 70]%isme spaces daalke likhiyo ,daalke nahi
b=[30 25 35 70] %column
cost=[11 20 17 8;21 16 10 12;8 12 18 9];%matrix

%check weather problem is balanced or unbalanced
if sum(a)==sum(b)%balanced
    disp("balanced")
else %unbalanced
    disp("unbalanced")
    if(sum(b)<sum(a))
        cost(:,end+1)=zeros(length(a),1)%add extra column of zero
        b(end+1)=sum(a)-sum(b)
    else
        cost(end+1,:)=zeros(1,length(b))
        a(end+1)=sum(b)-sum(a)
    end
end
%end ke pass last index ki value hoti hai

%ab agar unbalanced hoga code toh balance ho gya hoga

initial_c=cost;
m=size(cost,1)
n=size(cost,2)
x=zeros(m,n)%initialize allocation

%ab main loop start ho rha hai
for i=1:m
    for j=1:n
 cpq=min(cost(:))%cost(:) se column mein convert ho gya poore matrix,aur min lgane se sbka min aa gya
 if cpq==inf
     break
 end
 [p1,q1]=find(cpq==cost)% dono 8 ke indexes p,q mein store ho gye
 xpq=min(a(p1),b(q1))%min value choose kro
 [val,ind]=max(xpq)%max value gets allocated ---this line ko bhulio mat
 p=p1(ind) %p and q are the indexes jis value ko hmne as min cost choose kia hai
 q=q1(ind)
 x(p,q)=min(a(p),b(q));%min value allocate krdi
 if min(a(p),b(q))==a(p)
     b(q)=b(q)-a(p)
     a(p)=a(p)-x(p,q)
     cost(p,:)=inf
 else
     a(p)=a(p)-b(q)
     b(q)=b(q)-x(p,q)
     cost(:,q)=inf
    end
    end
end
z=0
for i=1:m
    for j=1:n
        z=z+initial_c(i,j)*x(i,j)
    end
end
array2table(x)%isko kyu kia hai dhang se research kr lio
fprintf('transportation cost is %f',z)


%simplex
clc
clear
A=[3 -1  3  1  0  0;-2  4  0  0  1  0;-4  3  8  0  0  1]
B=[7;12;10]
C=[-1  3  -2  0  0  0]
index=[4,5,6]%mtlb filhal kisko BFS choose kia hua hai(1 based)
m=length(B)%no of constraints
n=length(C)%no of variables
BS=[]%coefficient matrix of basic variables
CB=[]%this is the cost corresponding to basic variables
for i=1:m
    CB(i)=C(index(i))%this is cost corresponding to basic variables
    BS=[BS A(:,index(i))]%this is the coefficient matrix of basic variables
end
y=inv(BS)*A%this is table ki main values(sabhi alpha j ki values ek sath nikal li)
Xb=inv(BS)*B%right side of table
z=CB*y-C%this is zj-cj ka vector 
zmax=CB*Xb;


%main loop
while(min(z)<0)%jab tak koi bhi ek value of zj-cj is less than 0 
 [min1,ev]=min(z);%ev will have index of entering variable
 ratio=[]
 for i=1:m
     if y(i,ev)>0
         ratio(i)=Xb(i)/y(i,ev)
     else
         ratio(i)=10^8;
     end

 end
 test=min(ratio)%choose minimum value from the ratio array
 if test==10^8
     fprintf('unbounded')
     return
 else
     [min1,LV]=min(ratio);%index of leaving variable is denoted by LV
     index(LV)=ev  %ev ka index value according z(zj-cj) is written
 end
 BS=[]
 CB=[]
 for i=1:m
     CB(i)=C(index(i));
     BS=[BS A(:,index(i))]
 end
 y=inv(BS)*A
Xb=inv(BS)*B 
z=CB*y-C  
zmax=CB*Xb;
end
X=zeros
X(index)=Xb
zmax


